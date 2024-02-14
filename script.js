const button = document.querySelector(".button-main");
const jokeContainer = document.querySelector(".joke");



const url = "https://v2.jokeapi.dev/joke/Any?type=single&idRange=1-319";

let getJoke = () => {
  fetch(url).then(data => data.json())
  .then(item => jokeContainer.textContent = `${item.joke}`)
};


button.addEventListener("click", () => {
    getJoke();
});
