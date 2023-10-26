import React from 'react';
import { AnimationProvider } from './Components/AnimationContext';
import Login from './Components/login/Login'; // Your Login component
import Signup from './Components/Singup/Singup'; // Your Signup component

function App() {
  return (
    <AnimationProvider>
    <div>

      {/* Your app components */}
      <Login />
      <Signup />
    </div>
     </AnimationProvider>
  );
}

export default App;
