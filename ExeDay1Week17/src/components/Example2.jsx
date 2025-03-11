import React, { Component } from "react";

class Example2 extends Component {
  constructor() {
    super();
    this.state = { skills: {} }; // Start with an empty object
  }

  componentDidMount() {
    fetch("/data1.json")
      .then((response) => response.json())
      .then((data) => this.setState({ skills: data.Skills }))
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { skills } = this.state;

    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>

        {/* Ensure languages exist before mapping */}
        <h3 className="font-semibold">Languages:</h3>
        <ul>
          {skills.languages ? (
            skills.languages.map((lang, index) => <li key={index}>{lang}</li>)
          ) : (
            <p>Loading languages...</p>
          )}
        </ul>

        {/* Ensure frameworks exist before mapping */}
        <h3 className="font-semibold mt-4">Frameworks:</h3>
        <ul>
          {skills.frameworks ? (
            skills.frameworks.map((fw, index) => <li key={index}>{fw}</li>)
          ) : (
            <p>Loading frameworks...</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Example2;