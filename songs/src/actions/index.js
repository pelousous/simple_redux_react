/*  we can call this file index.js 
    and webpack can call it import actions from ../actions
    it understands
*/
export const selectSong = (song) => {
    return {
        type: 'SELECTED_SONG',
        payload: song
    }
}