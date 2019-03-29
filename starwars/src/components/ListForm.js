import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "",
        birth_year: "",
        height: "",
        gender: "",
        hair_color: "",
    };
  }

   handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    console.log(e);
    e.preventDefault();

    this.state = {
        name: "",
        birth_year: "",
        height: "",
        gender: "",
        hair_color: "",
    };
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;