// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to hold the dog image
  const [dogImage, setDogImage] = useState(null);

  // State to show loading text
  const [isLoading, setIsLoading] = useState(true);

  // Fetch function to get a dog image
  function fetchDogImage() {
    setIsLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }

  // useEffect runs once on initial
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random Dog Viewer</h1>

      {/* Loading text */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Dog image */}
          <img
            src={dogImage}
            alt="A Random Dog"
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />

          <br />

          {/* Fetch new dog button */}
          <button onClick={fetchDogImage} style={{ marginTop: "15px" }}>
            Fetch New Dog
          </button>
        </>
      )}
    </div>
  );
}

export default App;
