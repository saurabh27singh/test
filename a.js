function fetchJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "joke"
        ).textContent = `${data.setup} - ${data.punchline}`;
      })
      .catch((error) => {
        document.getElementById("joke").textContent =
          "Oops! Something went wrong, try again later.";
      });
  }
  