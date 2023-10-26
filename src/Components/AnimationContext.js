import { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export function useAnimation() {
  return useContext(AnimationContext);
}

export function AnimationProvider({ children }) {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggleAnimation = () => {
    setIsLoginVisible((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ isLoginVisible, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}
