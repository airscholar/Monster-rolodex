import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css'

export const CardList = props => {
    console.log(props)
    return (<div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}></Card>
            // <h1 key={user.id}>{user.name}</h1>
        ))}
        {/* <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="250px" height="150px" alt="forest" /> */}
    </div>);
}