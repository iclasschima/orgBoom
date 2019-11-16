import React from 'react';

const Person = ({ person }) => {
    return (
        <div className='row'>
            <div className='col-3'>
                <img src={person.img} alt={person.name}/>
            </div>
            <div className='col-9 pl-4 pt-2'>
                <h6>{person.name}</h6>
                <span>{person.title}</span><br />
                <span>{person.skills}</span>
            </div>
        </div>
    )
}

export default Person