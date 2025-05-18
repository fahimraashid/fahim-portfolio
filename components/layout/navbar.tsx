"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { basePath } from "@/lib/basePath";

const navItems = [
  { name: "Home", path: "" },
  { name: "About", path: "about" },
  { name: "Experience", path: "experience" },
  { name: "Education", path: "education" },
  { name: "Contact", path: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`${basePath}/`} className="text-xl font-bold text-gray-900 dark:text-white">
            Fahim Raashid
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const itemHref = `${basePath}/${item.path}`.replace(/\/+/g, '/').replace(/\/$/, '') || `${basePath}/`;
              const isHome = item.name === "Home";
              const isActive = isHome
                ? pathname === "/" || pathname === `${basePath}` || pathname === `${basePath}/`
                : pathname === itemHref;
              return (
                <Link
                  key={item.path}
                  href={itemHref}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const itemHref = `${basePath}/${item.path}`.replace(/\/+/g, '/').replace(/\/$/, '') || `${basePath}/`;
                  const isHome = item.name === "Home";
                  const isActive = isHome
                    ? pathname === "/" || pathname === `${basePath}` || pathname === `${basePath}/`
                    : pathname === itemHref;
                  return (
                    <Link
                      key={item.path}
                      href={itemHref}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 