import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MovementData } from '../data/movements';

type MovementCardProps = {
  movement: MovementData;
};

export default function MovementCard({ movement }: MovementCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={movement.imageUrl}
          alt={movement.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {movement.label}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {movement.description}
        </p>

        <button
          onClick={() => navigate(`/movement/${movement.id}`)}
          className="group/btn flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
        >
          Voir les conseils
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
