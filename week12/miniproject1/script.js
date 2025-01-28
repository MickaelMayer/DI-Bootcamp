// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

// If there is an error getting the data, display a message as follows:




function showLoading() {
    document.getElementById("loader").style.display = "block";
  }
  

  function hideLoading() {
    document.getElementById("loader").style.display = "none";
  }
  

  function fetchCharacterData(characterId) {
    const characterURL = `https://www.swapi.tech/api/people/${characterId}`;
  
    
    showLoading();
  
    fetch(characterURL)
      .then(response => response.json())
      .then(data => {
        const characterName = data.result.properties.name;
        const characterHeight = data.result.properties.height;
        const characterGender = data.result.properties.gender;
        const characterBirthYear = data.result.properties.birth_year;
        const homeworldURL = data.result.properties.homeworld;
  
        console.log("Character Details:", { characterName, characterHeight, characterGender, characterBirthYear, homeworldURL });
  
        
        updateCharacterDetails(characterName, characterHeight, characterGender, characterBirthYear);
  
        
        return fetchHomeworldData(homeworldURL);
      })
      .catch(error => {
        console.error("Error fetching character data:", error);
        alert("Failed to fetch character details. Please try again later.");
      })
      .finally(() => {
       
        hideLoading();
      });
  }
  

  function fetchHomeworldData(homeworldURL) {
    console.log("Fetching Homeworld from:", homeworldURL);
  
    return fetch(homeworldURL)
      .then(response => response.json())
      .then(homeworldData => {
        const homeworldName = homeworldData.result.properties.name;
        console.log("Updating DOM with homeworld name:", homeworldName);
        document.getElementById("characterHomeworld").textContent = `Homeworld: ${homeworldName}`;
      })
      .catch(error => {
        console.error("Error fetching homeworld data:", error);
        alert("Failed to fetch homeworld details. Please try again later.");
      });
  }
  
  function updateCharacterDetails(name, height, gender, birthYear) {
    console.log("Updating DOM with character details:", name, height, gender, birthYear);
  
    document.getElementById("characterName").textContent = name;
    document.getElementById("characterHeight").textContent = `Height: ${height}`;
    document.getElementById("characterGender").textContent = `Gender: ${gender}`;
    document.getElementById("characterBirthYear").textContent = `Birth Year: ${birthYear}`;
  }
  
  function getRandomCharacterId() {
    return Math.floor(Math.random() * 83) + 1; 
  }
  
  document.getElementById("fetchCharacterButton").addEventListener("click", () => {
    const randomId = getRandomCharacterId();
    console.log("Fetching character with ID:", randomId);
    fetchCharacterData(randomId);
  });