import React from 'react';

function Characters(props) {
    return (
        <div className="character-card">

            <div className="character-info">
                <h3>{props.characterProp.name}</h3>
                <p>
                    <strong>birth_year:</strong> {props.characterProp.birth_year}
                    <strong>height:</strong> {props.characterProp.height}
                    <strong>gender:</strong> {props.characterProp.gender}
                    <strong>hair_color:</strong> {props.characterProp.hair_color}
                </p>
            </div>
        </div>
    )
}

export default Characters;