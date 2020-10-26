import React from 'react';

import { Card } from '../card/card.component';

import './card-list.style.css';

export const CardList = (props) => {
    return <div className='card-list'>
        {
            //replace this.state with props
            props.monsters.map(monster => 
                // <h1 key={monster.id}>{ monster.name }</h1>
                <Card key={ monster.id } monster={ monster } />
            )
        }
    </div>
}