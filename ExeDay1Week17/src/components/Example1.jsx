import React, { Component } from "react";

class Example1 extends Component {
  constructor() {
    super();
    this.state = { socialMedias: [] };
  }

  componentDidMount() {
    fetch("/data1.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.SocialMedias)) {
          this.setState({ socialMedias: data.SocialMedias });
        } else {
          console.error("Invalid data format for SocialMedias");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Social Media Links</h2>
        <ul>
          {this.state.socialMedias.length === 0 ? (
            <p>Loading social media links...</p>
          ) : (
            this.state.socialMedias.map((social, index) => (
              <li key={index} className="mb-2">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {social.platform} - {social.username}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default Example1;