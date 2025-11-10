import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const check = () => {
    const ok = value.trim().toLowerCase() === 'giovanna';
    if (ok) {
      onUnlock?.();
    } else {
      setError(true);
      setTimeout(() => setError(false), 300);
    }
  };

  return (
    <motion.div
      className="gate-card"
      animate={error ? { x: [-8, 8, -8, 8, -4, 0] } : { x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>For my love</h2>
      <p className="gate-sub">Enter your secret password</p>
      <input
        className="gate-input"
        type="password"
        placeholder="Password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') check();
        }}
      />
      <button className="gate-button" onClick={check}>Open</button>
      {error && <div className="gate-error">That’s not it, try again ❤️</div>}
    </motion.div>
  );
}