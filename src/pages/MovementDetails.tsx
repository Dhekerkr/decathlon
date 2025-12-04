import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  ShoppingBag,
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { SportProfile } from '../data/questions';
import { movements, MovementData } from '../data/movements';
import { products } from '../data/products';

export default function MovementDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<SportProfile | null>(null);
  const [movement, setMovement] = useState<MovementData | null>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('decathlon-sport-profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    const foundMovement = movements.find((m) => m.id === id);
    setMovement(foundMovement || null);
  }, [id]);

  if (!movement) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <AlertTriangle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Mouvement non trouvé
          </h2>
          <button
            onClick={() => navigate('/results')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Retour aux résultats
          </button>
        </div>
      </div>
    );
  }

  const userLevel = profile?.level || 'Débutant';
  const instructions = movement.instructions[userLevel] || [];
  const relevantProducts = products.filter((p) =>
    p.movementIds.includes(movement.id)
  );

  return (
    <div className="space-y-8">
      <button
        onClick={() => navigate('/results')}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux résultats
      </button>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <img
              src={movement.imageUrl}
              alt={movement.label}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              {movement.label}
            </h1>
            <p className="text-lg text-slate-600">{movement.description}</p>
          </div>

          {profile && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Niveau :</span> {profile.level}
                {profile.painZone !== 'Aucune' && (
                  <>
                    {' '}
                    • <span className="font-semibold">Zone sensible :</span>{' '}
                    {profile.painZone}
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Instructions personnalisées
        </h2>
        <div className="space-y-3">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-slate-700 leading-relaxed">{instruction}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Points clés à vérifier
        </h2>
        <p className="text-slate-600 mb-6">
          Checklist pour une exécution parfaite et sécuritaire
        </p>
        <div className="space-y-3">
          {movement.checklist.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg"
            >
              <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-slate-800 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {relevantProducts.length > 0 && (
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <ShoppingBag className="w-6 h-6 text-slate-700" />
            <h2 className="text-2xl font-bold text-slate-900">
              Produits recommandés
            </h2>
          </div>
          <p className="text-slate-600 mb-6">
            Équipements Decathlon pour optimiser votre pratique
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {relevantProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
