import React, { useState } from 'react'
import "./Styling.css"
// import "./head.css"
// import "./alternatestyle.css"

const Elements = ({title,description,url,urlToImage,published,source,id}) => {
    return(
        <div className='content'>
            <div className='element'>
                <img className='image' src = {urlToImage} alt='{urlToImage}'/>
                <h3> <a href={url}>{title}</a></h3>
                <p className='desciption'>{description}</p>
                <p>Published on: {published}</p>
                <p>source: {source}</p>
                <p>{id}</p>

            </div>



        </div>

    )


}

export default Elements