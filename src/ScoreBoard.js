import React from 'react';
import Player from './Player';

class ScoreBoard extends React.Component {
  constructor(){
      super();

      this.state = {
          message: "There are no scores yet."
      };
  }

  onChangeScore(name, score){
      this.setState({
          message: name + " scored and has " + score + " points."
      });
  }

    render() {
        return (
            <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Score</td>
                    <td>+1</td>
                  </tr>
                </thead>
                <tbody>
                  <Player name="Benjamin" onChange={this.onChangeScore.bind(this)} />
                  <Player name="Wouter" onChange={this.onChangeScore.bind(this)} />
                  <Player name="Rory" onChange={this.onChangeScore.bind(this)} />
              </tbody>
              <tfoot>
                <tr colSpan="3">
                  <td>{this.state.message}</td>
                </tr>
            </tfoot>

            </table>

        );
    }
}

export default ScoreBoard;
