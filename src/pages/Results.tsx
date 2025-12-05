import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import ProfileSummary from '../components/ProfileSummary';
import MovementCard from '../components/MovementCard';
import { SportProfile } from '../data/questions';
import { movements } from '../data/movements';

function filterMovements(profile: SportProfile) {
  // 1. Filtre principal
  let filtered = movements.filter((m) => {
    const okGoal = m.recommendedFor.goals.includes(profile.goal);
    const okSport = m.recommendedFor.sports.includes(profile.mainSport);

    const okPain = !profile.painZone.some((p) =>
      m.recommendedFor.avoidPainZones.includes(p)
    );

    return okGoal && okSport && okPain;
  });

  // 2. fallback sport
  if (filtered.length === 0) {
    filtered = movements.filter((m) =>
      m.recommendedFor.sports.includes(profile.mainSport)
    );
  }

  // 3. fallback objectif
  if (filtered.length === 0) {
    filtered = movements.filter((m) =>
      m.recommendedFor.goals.includes(profile.goal)
    );
  }

  // 4. fallback final
  if (filtered.length === 0) {
    return movements;
  }

  return filtered;
}



export default function Results() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<SportProfile | null>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('decathlon-sport-profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <AlertTriangle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Aucun profil trouvé</h2>
          <button
            onClick={() => navigate('/qcm')}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-4"
          >
            Créer mon profil
          </button>
        </div>
      </div>
    );
  }

  const recommendedMovements = filterMovements(profile);

  return (
    <div className="space-y-8">
      <ProfileSummary profile={profile} />

      <div>
        <h2 className="text-3xl font-bold mb-2">Mouvements recommandés</h2>
        <p className="text-slate-600 mb-6">
          Sélectionnez un mouvement pour obtenir des instructions adaptées.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedMovements.map((movement) => (
            <MovementCard key={movement.id} movement={movement} />
          ))}
        </div>
      </div>
    </div>
  );
}
