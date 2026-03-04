"use client";

import { useState } from "react";

export default function Dashboard() {
  // Sample stats
  const stats = [
    { name: "Total Users", value: 1200 },
    { name: "Total Orders", value: 550 },
    { name: "Revenue", value: "$12,000" },
    { name: "Products", value: 85 },
  ];

  const products = [
    { id: 1, name: "Product A", price: "$100", stock: 20 },
    { id: 2, name: "Product B", price: "$200", stock: 15 },
    { id: 3, name: "Product C", price: "$150", stock: 30 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Navbar */}
      <div className="flex justify-between items-center bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold text-blue-600">Welcome, Sovan!</h2>
        <div className="text-gray-700 font-medium">User Menu</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer"
          >
            <p className="text-gray-500">{stat.name}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Products Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 font-bold">ID</th>
              <th className="px-6 py-3 text-left text-gray-600 font-bold">Name</th>
              <th className="px-6 py-3 text-left text-gray-600 font-bold">Price</th>
              <th className="px-6 py-3 text-left text-gray-600 font-bold">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}