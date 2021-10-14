import React from 'react'
import "./ItemListContainer.css"

export default function ItemListContainer({greeting}) {
    return (
            <div className="item-container">
                <div className="item-slogan">
            <h1 className="item-title">
COIN
            </h1>
            <h2 className="item-title">
{greeting}
            </h2>
            </div>
            </div>
    )
}
