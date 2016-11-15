import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { getScores } from '../actions/index';


class Carousel extends Component {


  componentWillMount() {
    this.props.getScores();
  }

  render() {
    console.log('this is state in carousel: ', this.props.scores);
    return (
      <div className='contain'>
        <div className='row'>
          <div className='row__inner'>
        {this.props.scores.map(game => {
          return (
            <div className='tile' key={game.away_team_id}>
                <div className='game_title'>
                  {game.game_media.media[0].title}
                </div>
              <div className='tile__media'>
                <img className='tile__img' src={game.video_thumbnails.thumbnail[0].content} />
              </div>
              <div className='game_description'>
                {game.venue}
              </div>
            </div>            
          )
        })}
          </div>
        </div>
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
