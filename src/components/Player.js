import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Player.css'


export default class Player extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        updatePlayerScore: PropTypes.func.isRequired
    }

    renderPlayer = (player) => {
        return (
          <Player
            id={player.id}
            name={player.name}
            score={player.score}
            key={player.id}
            updatePlayerScore={this.updatePlayerScore}
          />
        )
      }

      // handleOnClick = () => {
      //   const {id, score} = this.props
      //   this.props.updatePlayerScore(id, score + 1)
      // }

    render() {
        return (
        <li className='player'>
        <p className='name'>{this.props.name}</p>
        <p className= 'score'>{this.props.score}</p>
        </li>
        ) 
    }
}