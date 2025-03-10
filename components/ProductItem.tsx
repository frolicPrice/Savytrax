"use client";

import Image from "next/image";

interface Product {
  imageUrl: string;
  domain: string;
  currentPrice: string;
}

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 shadow-md rounded-lg">
      {product.imageUrl ? (
        <Image 
          src={product.imageUrl} 
          alt="Product Image" 
          width={200} 
          height={200} 
        />
      ) : (
        <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center">
          No Image
        </div>
      )}
      <h3 className="text-lg font-bold">{product.domain}</h3>
      <p className="text-green-600">{product.currentPrice}</p>
    </div>
  );
};

export default ProductItem;
