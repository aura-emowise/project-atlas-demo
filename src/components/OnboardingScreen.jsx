import React from 'react';
import { useGameState } from '../context/GameStateContext';

export default function OnboardingScreen() {
  const { startGame } = useGameState();

  return (
    <div className="text-center max-w-lg p-8 bg-gray-800 rounded-xl shadow-2xl shadow-cyan-500/10">
      <h1 className="text-5xl font-bold text-cyan-400 mb-4">Welcome to Atlas</h1>
      <p className="text-lg text-gray-300 mb-8">
        The world is complex. Your mind is the tool you use to understand it. Our mission is to help you upgrade that tool.
      </p>
      <button
        onClick={startGame}
        className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
      >
        Begin My Journey
      </button>
    </div>
  );
}