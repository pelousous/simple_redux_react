import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Another One Bites the Dust',
            duration: '1:35'
        },
        {
            title: 'Hey Jude',
            duration: '2:50'
        },
        {
            title: 'Billy Jean',
            duration: '3:25'
        },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SELECTED_SONG') {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});