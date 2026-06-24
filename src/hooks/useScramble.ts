import { useEffect, useState } from 'react';

export function useScramble(text: string, duration = 700) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?[]\\;\',./';
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const resolveIndex = Math.floor(progress * text.length);

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (index < resolveIndex) return text[index];
          if (char === ' ' || char === '/' || char === ',' || char === ':') return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (step >= totalSteps) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [text, duration]);

  return displayText;
}
