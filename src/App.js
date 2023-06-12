import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        this.setState(
          () => {
            return { monsters: data };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  // Get value from input field and save in state
  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchString: searchString };
    });
  };
  render() {
    // Destructuring state and methods
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    // Save filtered array into new array to render data
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <input type="search" placeholder="Search" onChange={onSearchChange} />
        {/* Show data on browser using map */}
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
