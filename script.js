document.getElementById("get-joke").addEventListener("click", fetchJoke);
document.getElementById("clear-joke").addEventListener("click", clearJoke);

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

function clearJoke() {
  document.getElementById("joke").textContent =
    'Click "Get Joke" to hear a joke!';
}
