import React from 'react'
import Card from './Card';
import './Cards.css';

function Cards({ Cources }) {

    if (!Cources) {
        return <div>Loading...</div>;
    }

    let allcources = Object.values(Cources).flat();

    return (
        <div className="cards-container">
            {allcources.map((eachcource) => {
                return <Card key={eachcource.id} eachCource={eachcource}></Card>
            })}
        </div>
    )
}

export default Cards;
