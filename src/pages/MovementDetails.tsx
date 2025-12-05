import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle, ShoppingBag } from 'lucide-react';
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
    if (savedProfile) setProfile(JSON.parse(savedProfile));

    const foundMovement = movements.find((m) => m.id === id);
    setMovement(foundMovement || null);
  }, [id]);

  if (!movement) {
    return <div>Mouvement non trouvé</div>;
  }

  const userLevel = profile?.level || "Débutant";
  const instructions = movement.instructions[userLevel] || [];

  const filteredProducts = products.filter((p) =>
  p.movementIds.includes(movement.id)
);

// fallback : si aucun produit lié directement
const finalProducts =
  filteredProducts.length > 0 ? filteredProducts : products.slice(0, 3);


  return (
    <div className="space-y-8">
      
      <button
        onClick={() => navigate('/results')}
        className="flex items-center gap-2 text-slate-600"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux résultats
      </button>

      <div className="grid lg:grid-cols-2 gap-8">

        <img
          src={movement.imageUrl}
          alt={movement.label}
          className="w-full rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{movement.label}</h1>
          <p className="text-slate-600 mb-4">{movement.description}</p>

          {profile && (
            <div className="bg-blue-50 p-4 rounded-xl">
              <p>
                <strong>Niveau :</strong> {profile.level}
              </p>
              {profile.painZone !== "Aucune" && (
                <p>
                  <strong>Zone sensible :</strong> {profile.painZone}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* INSTRUCTIONS */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Instructions personnalisées</h2>

        {instructions.map((inst, i) => (
          <div key={i} className="flex items-start gap-3 mb-3">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <p>{inst}</p>
          </div>
        ))}
      </div>

      {/* CHECKLIST */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold">Points clés</h2>
        <div className="space-y-3 mt-4">
          {movement.checklist.map((item, i) => (
            <div key={i} className="flex gap-3 bg-slate-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUITS */}
      {filteredProducts.length > 0 && (
        <div className="bg-slate-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ShoppingBag /> Produits recommandés
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
