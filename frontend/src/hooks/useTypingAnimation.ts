/* Typing animation hook — cycles through strings */

import { useState, useEffect, useCallback } from 'react';

interface UseTypingAnimationOptions {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingAnimation({
  strings,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: UseTypingAnimationOptions): string {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[stringIndex];

    if (!isDeleting) {
      setDisplayText(currentString.slice(0, displayText.length + 1));
      if (displayText.length === currentString.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayText(currentString.slice(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [displayText, isDeleting, pauseDuration, stringIndex, strings]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return displayText;
}
