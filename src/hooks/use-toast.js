import { useState } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (options) => {
    setToast(options);
    setTimeout(() => setToast(null), 3000);
  };

  return {
    toast: showToast
  };
};