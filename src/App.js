import React from 'react';
import Spinner from './components/Spinner';
import Chat from './pages/Chat';
import { useAuth } from './utils/hooks';

function App() {
  //eslint-disable-next-line
  const [user, isSuccess] = useAuth();

  return (
    <div className='app'>
      <div className='container'>{isSuccess ? <Chat /> : <Spinner />}</div>
    </div>
  );
}

export default App;
