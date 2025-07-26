// src/app/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="text-center bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700 max-w-2xl transform transition duration-500 ease-in-out hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg animate-fadeIn">
          ¡Bienvenido a StreamVerse Eventos!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-slideUp">
          Tu destino para disfrutar de los mejores eventos en vivo. Sumérgete en la acción de la NBA Summer League y mucho más. Para empezar, por favor inicia sesión o regístrate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounceIn">
          <Link href="/login" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              Iniciar Sesión
          </Link>
          <Link href="/register" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75">
              Registrarse
          </Link>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4">
            ¿Ya estás logueado y no te redirige automáticamente?
          </p>
          <Link href="/eventos" className="block w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75">
              Ir a la Lista de Eventos 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}
