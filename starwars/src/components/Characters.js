import React from 'react';

function Characters(props) {
    return (
        <div className="character-card">

            <div className="character-info">
                <h3>{props.characterFromMap.name}</h3>
                <p>
                    <strong> Birth Year:</strong> {props.characterFromMap.birth_year}
                    <strong> Height:</strong> {props.characterFromMap.height}
                    <strong> Mass:</strong> {props.characterFromMap.mass}
                    <strong> Gender:</strong> {props.characterFromMap.gender}
                    <strong> Hair Color:</strong> {props.characterFromMap.hair_color}
                    <strong> Eye Color:</strong> {props.characterFromMap.eye_color}
                    <strong> Starships:</strong> {props.characterFromMap.starships}
                    <strong> Homeworld:</strong> {props.characterFromMap.homeworld}
                </p>
            </div>
        </div>
    )
}

export default Characters;