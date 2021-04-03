import React, { useEffect } from 'react';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGame } from '../actions/gamesAction';
// Styled & Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../animations';


const Home = () => {
    // Create location path
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    // Dispatch loadgame
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGame())
    }, [dispatch])
    // Select state from redux
    const { popular, upcoming, newGames, searched } = useSelector(state => state.games);
    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
                {searched.length ? (
                    <div className="searched">
                        <h1>Searched Games</h1>
                        <Games>
                            {searched.map(item => (
                                <Game
                                    name={item.name}
                                    release={item.released}
                                    key={item.id}
                                    id={item.id}
                                    image={item.background_image}
                                />
                            ))}
                        </Games>
                    </div>
                ) : ''}
                <h1>Popular Games</h1>
                <Games>
                    {popular.map(item => (
                        <Game
                            name={item.name}
                            release={item.released}
                            key={item.id}
                            id={item.id}
                            image={item.background_image}
                        />
                    ))}
                </Games>
                <h1>New Games</h1>
                <Games>
                    {newGames.map(item => (
                        <Game
                            name={item.name}
                            release={item.released}
                            key={item.id}
                            id={item.id}
                            image={item.background_image}
                        />
                    ))}
                </Games>
                <h1>Upcoming Games</h1>
                <Games>
                    {upcoming.map(item => (
                        <Game
                            name={item.name}
                            release={item.released}
                            key={item.id}
                            id={item.id}
                            image={item.background_image}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h1 {
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-row-gap: 5rem;
    grid-column-gap: 3rem;
`

export default Home;