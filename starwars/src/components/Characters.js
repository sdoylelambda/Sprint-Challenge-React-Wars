import React from 'react';

function Characters(props) {
    return (
        <div className="character-card">

            <div className="character-info">
                <h3>{props.characterFromMap.name}</h3>
                <p>
                    <strong>birth_year:</strong> {props.characterFromMap.birth_year}
                    <strong>height:</strong> {props.characterFromMap.height}
                    <strong>gender:</strong> {props.characterFromMap.gender}
                    <strong>hair_color:</strong> {props.characterFromMap.hair_color}
                </p>
            </div>
        </div>
    )
}

export default Characters;