import React, {useEffect, useState} from "react";

import './badge.scss'


const PhotoCard = ({src}) => {

    return (
        <div className={'photo-card hide-featured-badge hide-favorite-badge'}>
            <article className={'photo-item photo-item--overlay'}>
                <a className={'photo-item__link'}>
                    <img src={src} className={'photo-item__img'}/>
                </a>
            </article>
        </div>
    )
}

export default PhotoCard;
