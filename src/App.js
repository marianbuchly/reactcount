import React from 'react';
import Counter from './Counter';
import ScoreBoard from './ScoreBoard';
import Player from './Player';

class App extends React.Component {
    render() {
        return (
          <div>
              <h1>High Scores</h1>
              <ScoreBoard />
          </div>
        );
    }
}

export default App;
