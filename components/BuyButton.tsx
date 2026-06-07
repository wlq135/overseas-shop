"use client";

import { Product } from "@/lib/products";
import { trackAffiliateClick } from "@/lib/gtag";

interface BuyButtonProps {
  product: Product;
}

export default function BuyButton({ product }: BuyButtonProps) {
  const handleClick = () => {
    trackAffiliateClick(product.id, product.name);
  };

  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg transition inline-block text-center"
    >
      Get It ↗
    </a>
  );
}
