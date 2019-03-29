import React from 'react';
import Characters from './Characters';
import ListForm from './ListForm';

const starwarsChars = {
    name: 'Luke Skywalker'
};

class StarwarsCharacters extends React.Component {
    constructor() {
        super();
        this.state = {
            characterList: starwarsChars,
            name: ''
        };
    }

    updateList = event => {
        event.preventDefault();
        const newCharacter = {
          name: this.state.name,
          birthYear: this.state.birthYear,
          gender: this.state.gender,
          height: this.state.height,
          mass: this.state.mass
        };

    this.setState({
        characterList: [...this.state.characterList, newCharacter]
    });
};



    render() {
    return (
        <div>
            <h1>React Wars</h1>

            <div className="class-list">
                {/* <Characters characterProp={lukeSkywalker} /> */}
                {/* {this.state.starwarsChars.map((characterFromMap, index) => (
                    <Characters key={index} characterProp={characterFromMap} /> */}
                       {this.state.starwarsChars.map(characterFromMap => (
                    <Characters characterFromMap={characterProp} />
                ))}
            </div>
        </div>
    );
}
}

export default StarwarsCharacters;