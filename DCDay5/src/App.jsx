import React, { useState } from "react";

function App() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isSubscribed: false,
  });

 
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Ternary operator to handle checkboxes
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

   
    console.log("Submitted Data:", formData);

 
    setFormData({
      name: "",
      email: "",
      isSubscribed: false,
    });
  };

  return (
    <div>
      <h1>Stateful Form with Props</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Subscribe:
          <input
            type="checkbox"
            name="isSubscribed"
            checked={formData.isSubscribed}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      <h3>Form Data:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Subscribed: {formData.isSubscribed ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;