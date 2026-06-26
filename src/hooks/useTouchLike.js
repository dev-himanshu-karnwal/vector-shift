import { useState, useEffect } from 'react';

export function useTouchLike() {
  const [isTouchLike, setIsTouchLike] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: coarse), (max-width: 1023px)').matches
      : false
  );

  useEffect(() => {
    const query = window.matchMedia('(pointer: coarse), (max-width: 1023px)');
    const update = () => setIsTouchLike(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return isTouchLike;
}
