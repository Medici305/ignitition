import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popup } from '../animations';

const Game = ({ name, release, image, id }) => {
    const stringId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
        document.body.style.overflow = 'hidden';
    }
    return (
        <StyleGame variants={popup} initial='hidden' animate='show' layoutId={stringId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
                <p>{release}</p>
                <motion.img layoutId={`image ${stringId}`} src={smallImage(image, 640)} alt={image} />
            </Link>
        </StyleGame>
    )
}

const StyleGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0, 0, 0, .2);
text-align: center;
border-radius: 1rem;
overflow: hidden;
cursor: pointer;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`
export default Game;