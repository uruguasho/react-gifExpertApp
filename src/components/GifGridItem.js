import React from 'react'

export const GifGridItem = ({ title, urlImage }) => {

    return (
        <div className="card animate__animated animate__backInRight">
            <img src={ urlImage } alt={ title } />
            <p> { title } </p>
        </div>
    );
}
