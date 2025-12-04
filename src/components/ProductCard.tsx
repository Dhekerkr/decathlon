import { ExternalLink, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
          <ShoppingCart className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 mb-1">{product.name}</h4>
          <p className="text-sm text-slate-600 mb-3">{product.description}</p>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Voir sur Decathlon
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
