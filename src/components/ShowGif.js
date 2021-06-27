import React, { useState } from 'react'

export const ShowGif = ({id, title, url}) => {
    
    const [state, setstate] = useState(false);

    return (
        <div className='card animate__animated animate__pulse'>
            { !state && <p className="animate__animated animate__flash animate__infinite">Cargando...</p>}
            <img src={url} onLoad={() => setstate(true)}/>
            <p>{title.trim().length == 0 ? "Sin titulo" : title}</p>
        </div>
    )
}
