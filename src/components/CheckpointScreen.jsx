import React, { useState } from 'react';
import { useGameState } from '../context/GameStateContext.jsx';
// ИЗМЕНЕНИЕ №1: Импортируем atlasData вместо checkpointData
import { atlasData } from '../data';

export default function CheckpointScreen({ checkpointId }) {
  const { completeCheckpoint, returnToSkillTree } = useGameState();

  // ИЗМЕНЕНИЕ №2: Логика поиска стала умнее.
  // Мы сначала "расплющиваем" все чекпойнты из всех уровней в один список, а потом ищем.
  const data = atlasData
    .flatMap(level => level.checkpoints)
    .find(c => c.id === checkpointId);
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  }

  const handleTryAgain = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  // Этот блок остается без изменений
  const isCorrect = selectedOption?.isCorrect;

  // Если по какой-то причине данные не нашлись, показываем заглушку
  if (!data) {
    return <div>Checkpoint not found!</div>;
  }

  return (
    <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-xl shadow-2xl flex flex-col gap-6">
      <div>
        <h1 className="text-4xl font-bold text-cyan-400 mb-2 flex items-center gap-3">
          {data.icon && <data.icon />} {data.title}
        </h1>
      </div>

      <div>
        <h2 className="font-bold text-lg text-gray-300 mb-1">The Concept</h2>
        <p className="text-gray-400">{data.concept}</p>
      </div>

      {data.importance && (
        <div>
          <h2 className="font-bold text-lg text-gray-300 mb-1">Why It Matters</h2>
          <p className="text-gray-400">{data.importance}</p>
        </div>
      )}
      
      {data.lab && (
        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="font-bold text-xl text-cyan-400 mb-2">The Lab</h2>
          <p className="italic text-gray-400 mb-1">{data.lab.scenario}</p>
          <p className="font-bold text-gray-300 mb-4">{data.lab.task}</p>
          <div className="space-y-3">
            {data.lab.options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(opt)}
                disabled={isAnswered}
                className={`w-full p-3 text-left rounded-lg transition-colors duration-300 ${
                  isAnswered && opt.isCorrect ? 'bg-green-500/20 border border-green-500' : ''
                } ${
                  isAnswered && !opt.isCorrect && selectedOption?.text === opt.text ? 'bg-red-500/20 border border-red-500' : ''
                } ${!isAnswered ? 'bg-gray-700 hover:bg-gray-600' : 'cursor-default'
                } border border-transparent`}
              >
                {opt.text}
              </button>
            ))}
          </div>
          {isAnswered && (
             <div className={`mt-4 p-3 rounded-lg ${isCorrect ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              <p className="font-bold">{isCorrect ? 'Correct! +10 XP' : 'Not Quite'}</p>
              <p>{data.lab.feedback}</p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        
        <div className="flex items-center gap-6">
           <button onClick={returnToSkillTree} className="text-gray-400 hover:text-white transition duration-200">
            ← Back to Skill Tree
           </button>
           <a href={data.deeperDiveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
             Deeper Dive...
           </a>
        </div>
        
        <div>
          {isAnswered && !isCorrect ? (
            <button
              onClick={handleTryAgain}
              className="bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all hover:bg-yellow-400"
            >
              Try Again
            </button>
          ) : (
            <button
              onClick={() => completeCheckpoint(checkpointId)}
              disabled={data.lab && !isCorrect}
              className="bg-cyan-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all disabled:bg-gray-600 disabled:cursor-not-allowed hover:enabled:bg-cyan-400"
            >
              Mark as Complete
            </button>
          )}
        </div>

      </div>
    </div>
  );
}