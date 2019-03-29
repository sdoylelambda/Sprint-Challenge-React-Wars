import React from 'react';
import Characters from './Characters';
import ListForm from './ListForm';

class StarwarsCharacters extends React.Component {
    constructor() {
        super();
    }

    render() {
    return (
        <div>
            <h1>React Wars</h1>

            <div className="class-list">
                    {this.props.characterProp.map(character => (
                    <Characters characterFromMap={character} />
                ))}
            </div>
        </div>
    );
}
}

export default StarwarsCharacters;