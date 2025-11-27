"use client";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: any;
  showViewDetails?: boolean;
  onEdit?: () => Promise<void> | void;
  onDelete?: () => Promise<void> | void;

}

export default function ProductCard({
  product,
  showViewDetails = false,
  onEdit,
  onDelete
}: ProductCardProps) {
  const router = useRouter();

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col bg-gradient-to-b from-indigo-400 to-white">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.shortDesc}</p>
        <p className="font-bold mb-4">${product.price}</p>

        <div className="mt-auto flex gap-2">
          {showViewDetails && (
            <button
              onClick={() => router.push(`/products/${product._id}`)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
            >
              View Details
            </button>
          )}

          {onEdit && (
            <button
              onClick={onEdit}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Edit
            </button>
          )}

          {onDelete && (
            <button
              onClick={onDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
