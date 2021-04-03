import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api';

export const loadGame = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: 'FETCH_GAME',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios(searchGameURL(game_name))

    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGames.data.results
        }
    })
}
