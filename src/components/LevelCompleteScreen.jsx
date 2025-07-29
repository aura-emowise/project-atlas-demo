import React from 'react';
import { useGameState } from '../context/GameStateContext.jsx';
import { atlasData } from '../data';
import { FaTrophy } from 'react-icons/fa';

export default function LevelCompleteScreen() {
  const { returnToSkillTree, lastCompletedLevelId } = useGameState();
  const level = atlasData.find(l => l.id === lastCompletedLevelId);

  if (!level) return null;

  return (
    <div className="text-center max-w-md p-8 bg-gray-800 rounded-xl shadow-2xl shadow-yellow-500/20 flex flex-col items-center animate-fade-in">
      <FaTrophy className="text-7xl text-yellow-400 mb-4" />
      <h2 className="text-2xl font-bold text-gray-200">LEVEL COMPLETE!</h2>
      <h1 className="text-4xl font-bold text-cyan-400 mt-2 mb-6">{level.title}</h1>
      <p className="text-lg text-gray-300 mb-8">
        You've acquired a new set of powerful mental tools. Keep going to build your Atlas of reality.
      </p>
      <button
        onClick={returnToSkillTree}
        className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
      >
        Continue My Journey
      </button>
    </div>
  );
}