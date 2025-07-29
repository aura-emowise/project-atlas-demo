import React from 'react';
import { useGameState } from '../context/GameStateContext.jsx';
import { atlasData } from '../data';
import { FaLock, FaCheckCircle, FaStar, FaCertificate } from 'react-icons/fa';

export default function SkillTreeScreen() {
  const { startCheckpoint, completedCheckpoints, claimCertificate } = useGameState();

  const totalCheckpoints = atlasData.reduce((sum, level) => sum + level.checkpoints.length, 0);
  const allLevelsComplete = completedCheckpoints.size === totalCheckpoints;

  const isLevelUnlocked = (levelId) => {
    if (levelId === 1) return true;
    const prevLevel = atlasData.find(l => l.id === levelId - 1);
    if (!prevLevel) return false;
    const prevLevelCheckpoints = new Set(prevLevel.checkpoints.map(c => c.id));
    const completedInPrevLevel = Array.from(completedCheckpoints).filter(id => prevLevelCheckpoints.has(id));
    return completedInPrevLevel.length === prevLevel.checkpoints.length;
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-xl shadow-2xl">
      {atlasData.map((level) => {
        const unlocked = isLevelUnlocked(level.id);
        const levelCheckpoints = new Set(level.checkpoints.map(c => c.id));
        const completedInThisLevel = Array.from(completedCheckpoints).filter(id => levelCheckpoints.has(id));
        const isLevelComplete = completedInThisLevel.length === level.checkpoints.length;

        return (
          <div key={level.id} className={`p-6 rounded-lg mb-6 transition-all duration-500 ${unlocked ? 'bg-gray-700/50' : 'bg-gray-800/50 opacity-50'}`}>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400 flex items-center">
                  {!unlocked && <FaLock className="mr-3" />} {level.title}
                </h2>
                <p className="text-gray-400">{level.description}</p>
              </div>
              {isLevelComplete && <FaStar className="text-5xl text-yellow-400 animate-pulse" />}
            </div>
            
            {unlocked && (
              <div className="space-y-2">
                {level.checkpoints.map((checkpoint) => {
                  const isCompleted = completedCheckpoints.has(checkpoint.id);
                  const isPlaceholder = !checkpoint.lab;

                  return (
                    <button
                      key={checkpoint.id}
                      disabled={isCompleted} 
                      onClick={() => startCheckpoint(checkpoint.id)}
                      className="w-full text-left p-3 rounded-md flex items-center gap-4 bg-gray-900/50 transition-colors hover:enabled:bg-gray-900/80 disabled:opacity-60 disabled:cursor-default"
                    >
                      <div className="text-xl">
                        {isCompleted ? (
                           <FaCheckCircle className="text-green-400" />
                        ) : (
                           isPlaceholder ? <checkpoint.icon className="text-gray-500"/> : <checkpoint.icon className="text-cyan-400" />
                        )}
                      </div>
                      <span className={`font-semibold ${isPlaceholder ? 'italic text-gray-500' : ''}`}>
                        {checkpoint.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {allLevelsComplete && (
        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white">Congratulations! You have mastered all the tools.</h2>
          <p className="text-white/80 mt-2">You have demonstrated the foundational skills for clear and rational thinking.</p>
          <button
            onClick={claimCertificate}
            className="mt-6 flex items-center gap-3 mx-auto bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
          >
            <FaCertificate /> Claim Your Certificate
          </button>
        </div>
      )}
    </div>
  );
}