import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { getScores } from '../actions/index';


class Carousel extends Component {

  componentWillMount() {
    this.props.getScores();
  }

  renderGames() {
    return this.props.scores.map(game => {
      console.log('game: ', game);
      return (
        <div className='thumbnails'>
          <h3>{game.away_team_city} @ {game.home_team_city}</h3>
          <img src={game.video_thumbnails.thumbnail[0].content} />
        </div>
      )
    })
  }

  render() {
    console.log('this is state in carousel: ', this.props.scores);
    return (
      <div className='carousel'>
        {this.renderGames()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scores: state.scores.all
  }
}


export default connect(mapStateToProps, { getScores })(Carousel);
