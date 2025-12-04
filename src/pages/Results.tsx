import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import ProfileSummary from '../components/ProfileSummary';
import MovementCard from '../components/MovementCard';
import { SportProfile } from '../data/questions';
import { movements } from '../data/movements';

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
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Aucun profil trouvé
          </h2>
          <p className="text-slate-600 mb-6">
            Vous devez d'abord créer votre profil sportif en répondant au
            questionnaire.
          </p>
          <button
            onClick={() => navigate('/qcm')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Créer mon profil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ProfileSummary profile={profile} />

      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Mouvements recommandés
          </h2>
          <p className="text-slate-600 text-lg">
            Sélectionnez un mouvement pour obtenir des instructions
            personnalisées selon votre profil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movements.map((movement) => (
            <MovementCard key={movement.id} movement={movement} />
          ))}
        </div>
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
        <p className="text-sm text-slate-600 text-center">
          Vos données sont stockées localement dans votre navigateur. Aucune
          information n'est envoyée à un serveur externe.
        </p>
      </div>
    </div>
  );
}
