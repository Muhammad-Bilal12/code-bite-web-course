const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// ------------------ Using ASYNC/AWAIT method ---------------

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerText = data.joke;
}

// ------------------ Using .then() method-------------
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerText = data.joke;
//     });
// }
