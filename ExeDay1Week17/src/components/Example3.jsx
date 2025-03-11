import React, { Component } from "react";

class Example3 extends Component {
  constructor() {
    super();
    this.state = { experiences: [] };
  }

  componentDidMount() {
    fetch("/data1.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.Experiences)) {
          this.setState({ experiences: data.Experiences });
        } else {
          console.error("Invalid data format for Experiences");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Work Experiences</h2>
        {this.state.experiences.length === 0 ? (
          <p>Loading experiences...</p>
        ) : (
          this.state.experiences.map((exp) => (
            <div key={exp.id ? `exp-${exp.id}` : `exp-${Math.random()}`} className="mb-4 p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-700">{exp.position}</p>
              <p className="text-gray-500">{exp.years}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Example3;