import { Product } from "@/lib/products";
import BuyButton from "./BuyButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Product Image</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gray-900">
            ${(product.price / 100).toFixed(2)}
          </span>
          <BuyButton product={product} />
        </div>
      </div>
    </div>
  );
}
