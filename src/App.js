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
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchString);
    });
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchString: searchString };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
