import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageWrapper = ({ children, keyId }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={keyId}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="page"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default function LoversCard() {
  const [tab, setTab] = useState('letter');

  return (
    <div className="lovers-card">
      <div className="tabs">
        {['letter', 'notes', 'gallery'].map((t) => (
          <button
            key={t}
            className={`tab ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t === 'letter' && 'Letter'}
            {t === 'notes' && 'Notes'}
            {t === 'gallery' && 'Flowers'}
          </button>
        ))}
      </div>

      {tab === 'letter' && (
        <PageWrapper keyId="letter">
          <LetterPage />
        </PageWrapper>
      )}

      {tab === 'notes' && (
        <PageWrapper keyId="notes">
          <NotesPage />
        </PageWrapper>
      )}

      {tab === 'gallery' && (
        <PageWrapper keyId="gallery">
          <GalleryPage />
        </PageWrapper>
      )}
    </div>
  );
}

function LetterPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="letter">
      <motion.div
        className="envelope"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="flap"
          animate={{ rotateX: open ? 180 : 0 }}
          style={{ transformOrigin: 'top center' }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="paper"
          animate={{ y: open ? -10 : 60, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="paper-content">
            For my baby,
            <br />
            These past two months together have made me love you more every single day. 
            You are my light, my peace, and my safe haven; you are my everything.
            <br />
            You are my first thought when I wake and my last before I sleep, and you are in all of my dreams. 
            I love you forever, Giovanna. I am so happy that you are mine. Thank you for being you. I love you forever.
          </div>
        </motion.div>
      </motion.div>
      <p className="hint">Tap the envelope to open</p>
    </div>
  );
}

function NotesPage() {
  const notes = [
    'Take care',
    'Eat on time',
    "You're mine, always",
    'I love you <3',
  ];
  return (
    <div className="notes">
      <div className="notes-grid">
        {notes.map((n, i) => (
          <motion.div
            key={i}
            className="note"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <span className="heart">❤</span> {n}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function GalleryPage() {
  const urls = [
    'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    'https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    'https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
    'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
    'https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    'https://images.unsplash.com/photo-1710234277863-4968c19f1d49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VycyUyMGJvdXFlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
  ];
  return (
    <div className="gallery">
      <div className="gallery-grid">
        {urls.map((u, i) => (
          <motion.img
            key={i}
            src={u}
            alt="Flower"
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ scale: 1.03 }}
          />
        ))}
      </div>
    </div>
  );
}