"use client";

import { useState } from "react";

export default function ProductForm({ onProductCreated }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        descripcion,
        precio: Number(precio),
      }),
    });

    if (res.ok) {
      const newProduct = await res.json();

      onProductCreated(newProduct);

      setNombre("");
      setDescripcion("");
      setPrecio("");
    } else {
        const errorText = await res.text();
        console.error("Error backend:", errorText);
        alert("Error al crear producto: " + errorText);    }
  };

    return (
   <form onSubmit={handleSubmit} className="flex flex-col gap-3">
  <h2 className="text-xl font-semibold mb-2">Crear producto</h2>

  <input
    className="border p-2 rounded"
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
  />

  <input
    className="border p-2 rounded"
    placeholder="Descripción"
    value={descripcion}
    onChange={(e) => setDescripcion(e.target.value)}
  />

  <input
    className="border p-2 rounded"
    placeholder="Precio"
    value={precio}
    onChange={(e) => setPrecio(e.target.value)}
    type="number"
  />

  <button
    type="submit"
    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
  >
    Crear
  </button>
</form>
    );
}