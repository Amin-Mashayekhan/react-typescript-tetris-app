import React from 'react';
import {STAGE_WIDTH} from '../setup';
import {randomTetromino} from '../gameHelpers';

export type PLAYER = {
    pos: {
        x: number; 
        y: number;
    }
    tetromino: (string | number)[][];
    collided: boolean;
}


export const usePlayer = () => {
    const [player, userPlayer] = React.useState({} as PLAYER);

    const updatePlayerPos = ({x, y, collided}: {x: number, y: number, collided: boolean}) => {
        
    }
}