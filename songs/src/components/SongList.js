import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component  {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item">
                    <button 
                        className="ui right floated button primary"
                        onClick={() => this.props.selectSong(song)}
                    >Select</button>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        });
    }
    
    render() {
        return <div className="ui relaxed divided list">
            {this.renderList()}
        </div>
    }
}

/* we want the list of songs out of a redux store */
/* from state to props of our component */
/* it takes all the state from our store */
/* it's going to rerun every time we change the state  */
/* IF WE PASS ACTION DIRECTLY redux wrap them inside a dispatch function */
const mapStateToProps = state => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, { selectSong })(SongList);