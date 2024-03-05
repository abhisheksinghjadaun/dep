// App.js
import React from 'react';
import EmbeddableScript from './EmbeddableScript';

function App() {
  return (
    <div className="App">
      <h1>My Embeddable React App</h1>
      <p>This is my embeddable React application!</p>

      {/* Embeddable script tag */}
      <EmbeddableScript src="http://localhost:3000" />
    </div>
  );
}

export default App;