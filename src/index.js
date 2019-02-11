import React from 'react';
import ReactDOM from 'react-dom';
import Write from './screens/Write';

function App() {
  return (
    <>
      <Write />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
