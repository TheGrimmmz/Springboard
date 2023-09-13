import React from 'react'
import PropTypes from "prop-types"
import './Meme.css'

function Meme({ deleteMeme, topText, bottomText, url, id}){
    function handleDeleteMeme(){
        deleteMeme(id);
    }

    return (
        <div className='Meme'>
            <div className='container'>
                <span className='topText'>{topText}</span>
                <img src={url} alt='meme'/>
                <span className='bottomText'>{bottomText}</span>
                <button id='deleteBtn' onClick={handleDeleteMeme}>Delete</button>
            </div>
        </div>
    )
}

Meme.propTypes = {
    topText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
}

export default Meme;
