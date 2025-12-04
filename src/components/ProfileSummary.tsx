import { SportProfile } from '../data/questions';
import { User, Target, Award, AlertCircle } from 'lucide-react';

type ProfileSummaryProps = {
  profile: SportProfile;
};

export default function ProfileSummary({ profile }: ProfileSummaryProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6">Votre profil sportif</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-start gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-1">Niveau</p>
            <p className="font-semibold text-lg">{profile.level}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-1">Sport principal</p>
            <p className="font-semibold text-lg">{profile.mainSport}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-1">Objectif</p>
            <p className="font-semibold text-lg">{profile.goal}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-1">Zone sensible</p>
            <p className="font-semibold text-lg">{profile.painZone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
