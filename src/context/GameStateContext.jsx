import React, { createContext, useState, useContext } from 'react';
import { atlasData } from '../data';

const GameStateContext = createContext();
export const useGameState = () => useContext(GameStateContext);

export const GameStateProvider = ({ children }) => {
  // Добавляем новый экран 'final_certification'
  const [currentScreen, setCurrentScreen] = useState('onboarding'); 
  const [activeCheckpointId, setActiveCheckpointId] = useState(null);
  const [completedCheckpoints, setCompletedCheckpoints] = useState(new Set());
  const [lastCompletedLevelId, setLastCompletedLevelId] = useState(null);

  const startGame = () => setCurrentScreen('skilltree');

  const startCheckpoint = (id) => {
    setActiveCheckpointId(id);
    setCurrentScreen('checkpoint');
  };
  
  const returnToSkillTree = () => {
    setCurrentScreen('skilltree');
    setActiveCheckpointId(null);
    setLastCompletedLevelId(null);
  };
  
  // Новая функция возврата "домой"
  const returnToHome = () => {
    setCompletedCheckpoints(new Set()); // 
    setCurrentScreen('onboarding');
  };

  // 
  const claimCertificate = () => {
    setCurrentScreen('final_certification');
  };

  const completeCheckpoint = (id) => {
    const newCompleted = new Set(completedCheckpoints).add(id);
    setCompletedCheckpoints(newCompleted);

    const currentLevel = atlasData.find(level => level.checkpoints.some(c => c.id === id));
    
    const allInLevel = new Set(currentLevel.checkpoints.map(c => c.id));
    const completedInThisLevel = Array.from(newCompleted).filter(cId => allInLevel.has(cId));

    if (completedInThisLevel.length === allInLevel.size) {
      setLastCompletedLevelId(currentLevel.id);
      setCurrentScreen('level_complete');
    } else {
      returnToSkillTree();
    }
  };

  const value = {
    currentScreen, activeCheckpointId, completedCheckpoints, lastCompletedLevelId,
    startGame, startCheckpoint, completeCheckpoint, returnToSkillTree,
    returnToHome, claimCertificate //
  };

  return <GameStateContext.Provider value={value}>{children}</GameStateContext.Provider>;
};