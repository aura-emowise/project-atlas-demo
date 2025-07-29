import React from 'react';
import { GameStateProvider, useGameState } from './context/GameStateContext.jsx';
import OnboardingScreen from './components/OnboardingScreen';
import SkillTreeScreen from './components/SkillTreeScreen';
import CheckpointScreen from './components/CheckpointScreen';
import LevelCompleteScreen from './components/LevelCompleteScreen';
import FinalCertificationScreen from './components/FinalCertificationScreen'; // <-- 

const AppContent = () => {
  const { currentScreen, activeCheckpointId } = useGameState();

  return (
    <main className="bg-slate-900 text-white min-h-screen flex items-center justify-center font-sans p-4">
      {currentScreen === 'onboarding' && <OnboardingScreen />}
      {currentScreen === 'skilltree' && <SkillTreeScreen />}
      {currentScreen === 'checkpoint' && <CheckpointScreen checkpointId={activeCheckpointId} />}
      {currentScreen === 'level_complete' && <LevelCompleteScreen />}
      {currentScreen === 'final_certification' && <FinalCertificationScreen />} {/* <--  */}
    </main>
  );
}

export default function App() {
  return (
    <GameStateProvider>
      <AppContent />
    </GameStateProvider>
  )
}