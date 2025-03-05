import React from 'react';
import './Exercise.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
const Exercise = () => {
    return (
        <div>
            <h1 style=
            // {{ color: 'red', backgroundColor: 'lightblue' }}
            {style_header}
            >Hello World</h1>
            <p className='para'>This is a paragraph.</p>
            <a href="https://www.example.com">This is a link</a>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
        </div>
    );
};

export default Exercise;