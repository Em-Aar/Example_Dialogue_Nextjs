'use client'
import Delete from "@/lib/delete";
export default function DeleteEmployee({ id }: { id: string }) {
  console.log(id)
  return (
    <div>
      <button
      onClick={() => Delete(id)}
        className={`bg-gray-900 rounded-md text-xs px-2 py-1 text-fuchsia-300`}
      >
        Delete
      </button>
    </div>
  );
}
