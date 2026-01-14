import { useEffect, useState } from 'react';

export default function HelloWorld() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '100px',
        transition: 'all 1s ease',
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateY(0px)' : 'translateY(30px)',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#0070f3' }}>Hello World !</h1>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>
        Bienvenue dans votre projet Next.js
      </p>
    </div>
  );
}
