"use client";

import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleNewProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDelete = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    setProducts((prev) => prev.filter((p) => p.id_producto !== id));
  } else {
    alert("Error al eliminar producto");
  }
};

return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
  <h1 className="text-3xl font-bold mb-6">StoQ - Productos</h1>

  <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
    <ProductForm onProductCreated={handleNewProduct} />
  </div>

  <div className="mt-6 w-full max-w-md">
    {products.map((p) => (
      <div
        key={p.id_producto}
        className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-3"
      >
        <div>
          <p className="font-semibold">{p.nombre}</p>
          <p className="text-gray-600">${p.precio}</p>
        </div>

        <button
          onClick={() => handleDelete(p.id_producto)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    ))}
  </div>
</div>
  );
}