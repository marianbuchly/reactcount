import React from 'react';
import Player from './Player';

class ScoreBoard extends React.Component {
  constructor(){
      super();

      this.state = {
          message: "There are no scores yet.",
          players: [
                { name: "Marian", score: 0},
                { name: "Nora", score: 0},
                { name: "Aggie", score: 0},
                { name: "Rogier", score: 0},
                { name: "Laurence", score: 0},
                { name: "Brian", score: 0},
                { name: "Benjamin", score: 0},
                { name: "Wouter", score: 0 },
                { name: "Rory", score: 0 }
            ]
      };
  }

  onChangeScore(name, score){
      var oldPlayers = this.state.players;
      var newPlayers = oldPlayers.map(function(player){
          if(player.name == name){
                return {
                    name: player.name,
                    score: score
                }
            }

            return player;
        });

      this.setState({
          message: name + " scored and has " + score + " points.",
          players: newPlayers
      });
  }

  renderPlayer(player){
         return <Player
             name={player.name}
             score={player.score}
             onChange={this.onChangeScore.bind(this)} />;
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
                  {this.state.players.map(this.renderPlayer.bind(this))}
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
