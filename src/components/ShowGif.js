import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ShowGif = ({title, url}) => {
    
    const [state, setstate] = useState(false);

    return (
        <div className='card animate__animated animate__pulse'>
            { !state && <p className="animate__animated animate__flash animate__infinite">Cargando...</p>}
            <img src={url} onLoad={() => setstate(true)}/>
            <p className='title'>{title.trim().length == 0 ? "Sin titulo" : title}</p>
        </div>
    )
}

ShowGif.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}