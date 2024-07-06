const form = document.querySelector("form")
const input = document.querySelector("input")
const loading = document.querySelector(".loading")

const url = "http://www.omdbapi.com/?t="

// TODO 63949f1a
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const movieName = input.value
    // *** Afficher un loading spinner
    loading.classList.remove("hidden")
    // *** Appeler l'API
    getMovie(movieName)
})

async function getMovie(movieName) {
    const response = await fetch(`${url}${movieName}&apikey=63949f1a`)
    const data = await response.json()
    console.log(data)
    displayMovie(data)
}

function displayMovie(movie) {
    const main = document.querySelector("main")
    main.innerHTML = `
    <div class="card card-side w-120 bg-base-100 shadow-lg">
  <figure><img src="${movie.Poster}" alt="Poster" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      ${movie.Title}
      <div class="badge badge-secondary">${movie.Released}</div>
    </h2>
    <p class="w-96">${movie.Plot}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">${movie.Genre}</div> 
    </div>
  </div>
</div>
    `

    console.log(movie)
}