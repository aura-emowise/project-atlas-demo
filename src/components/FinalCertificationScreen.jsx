import React from 'react';
import { useGameState } from '../context/GameStateContext.jsx';
import { atlasData } from '../data';
import { FaCertificate, FaPrint, FaHome } from 'react-icons/fa';

// Д QR-кода : npm install qrcode.react
// import QRCode from 'qrcode.react'; 

export default function FinalCertificationScreen() {
  const { returnToHome } = useGameState();
  const completionDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // 
  const appUrl = "https://project-atlas.vercel.app"; //  URL

  return (
    <div className="w-full max-w-4xl p-8 bg-slate-800 rounded-xl shadow-2xl flex flex-col items-center">
      
      {/* Сам Сертификат */}
      <div id="certificate-to-print" className="w-full p-10 bg-gray-100 text-gray-800 rounded-lg border-8 border-cyan-500 flex flex-col items-center">
        <FaCertificate className="text-6xl text-yellow-500 mb-4" />
        <h1 className="text-4xl font-bold text-cyan-700">Certificate of Cognitive Competence</h1>
        <p className="mt-4 text-lg">This certifies that</p>
        <p className="mt-2 text-3xl font-serif text-gray-900">A Valued Atlas User</p>
        <p className="mt-4 text-lg text-center">
          has successfully completed all levels of the Project: Atlas cognitive toolkit, demonstrating proficiency in the following core areas:
        </p>
        
        <ul className="mt-6 text-left list-disc list-inside">
          {atlasData.map(level => (
            <li key={level.id} className="font-semibold text-md">{level.title}</li>
          ))}
        </ul>

        <p className="mt-8 text-sm">Awarded on: {completionDate}</p>
        
        <div className="mt-6">
           {/* Это заглушка для QR-кода. В реальном проекте использовать <QRCode value={appUrl} /> */}
          <div className="w-24 h-24 bg-white border border-gray-400 p-1 flex items-center justify-center">
            <p className="text-xs text-center text-gray-500">QR Code Placeholder</p>
          </div>
        </div>
      </div>

      {/* Кнопки управления */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={() => window.print()} // 
          className="flex items-center gap-2 bg-cyan-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all hover:bg-cyan-400"
        >
          <FaPrint /> Print / Save PDF
        </button>
        <button
          onClick={returnToHome}
          className="flex items-center gap-2 bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-all hover:bg-gray-500"
        >
          <FaHome /> Back to Main Screen
        </button>
      </div>

    </div>
  );
}