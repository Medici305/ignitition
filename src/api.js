// Base URL
const base_url = 'https://api.rawg.io/api/';

// Get Month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
}

console.log(getCurrentMonth());

// Get Day
const getCurrentDay = () => {
    const day = new Date().getMonth();
    return day < 10 ? `0${day}` : day;
}

const getYear = new Date().getFullYear();
const getMonth = getCurrentMonth();
const getDay = getCurrentDay();
const currentDate = `${getYear}-${getMonth}-${getDay}`;
const previousDate = `${getYear - 1}-${getMonth}-${getDay}`;
const futureDate = `${getYear + 1}-${getMonth}-${getDay}`;

const popularGames = `games?dates=${previousDate},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `games?dates=${currentDate},${futureDate}&ordering=-added&page_size=12`;
const newGames = `games?dates=${previousDate},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Get Game Detail
export const gameDetailURL = (gameId) => `${base_url}games/${gameId}`;
// Get ScreenShots
export const gameScreenshotURL = (gameId) => `${base_url}games/${gameId}/screenshots`;

// Searched Game
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=12`