// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.



const gifForm = document.getElementById("gifForm");
const categoryInput = document.getElementById("categoryInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllButton = document.getElementById("deleteAllButton");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

gifForm.addEventListener("submit", async (e) => {
  e.preventDefault(); 

  const category = categoryInput.value.trim();
  if (!category) {
    alert("Please enter a category.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.original.url;

    const gifDiv = document.createElement("div");
    gifDiv.className = "gif-item";

    const gifImg = document.createElement("img");
    gifImg.src = gifUrl;
    gifImg.alt = category;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => gifDiv.remove());

    gifDiv.appendChild(gifImg);
    gifDiv.appendChild(deleteButton);
    gifContainer.appendChild(gifDiv);
  } catch (error) {
    console.error("Error fetching GIF:", error.message);
    alert("Could not fetch GIF. Please try again.");
  }

  categoryInput.value = ""; 
});

deleteAllButton.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});