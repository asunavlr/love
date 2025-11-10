import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import PasswordGate from './components/PasswordGate.jsx';
import LoversCard from './components/LoversCard.jsx';

function App() {
  const [stage, setStage] = useState('gate');

  useEffect(() => {
    if (stage === 'greet') {
      const t = setTimeout(() => setStage('card'), 2000);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <div className="app-root">
      <AnimatePresence mode="wait">
        {stage === 'gate' && (
          <motion.div
            key="gate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <PasswordGate onUnlock={() => setStage('greet')} />
          </motion.div>
        )}

        {stage === 'greet' && (
          <motion.div
            key="greet"
            className="greet"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Welcome my love, enjoy your stay</h1>
            <p>Loading something special…</p>
          </motion.div>
        )}

        {stage === 'card' && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <LoversCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
