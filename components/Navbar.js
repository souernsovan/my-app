"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              MyWebsite
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span> // X icon
              ) : (
                <span className="text-2xl">&#9776;</span> // Hamburger
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-blue-500">
          <Link href="/" className="block px-3 py-2 rounded hover:bg-blue-400">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded hover:bg-blue-400">
            About
          </Link>
          <Link href="/products" className="block px-3 py-2 rounded hover:bg-blue-400">
            Products
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded hover:bg-blue-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}