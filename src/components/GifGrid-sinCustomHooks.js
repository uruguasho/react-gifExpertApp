import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [imgs, setImgs] = useState([]);

    useEffect( () => {
        getGifs( category ).then( imgs => setImgs( imgs ) );
    }, [ category ]);

    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    imgs.map( ( img ) => (
                        <GifGridItem key={ img.id } { ...img } />
                    ))
                }
            </div>
        </>
    );
}
