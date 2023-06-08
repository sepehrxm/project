let image = document.querySelector('#movieImage')
let searchButton = document.querySelector('#searchButton')
let inputName = document.querySelector('#inputName')
let title = document.querySelector('#title')
let overview = document.querySelector('#overview')
let rating = document.querySelector('#rating')


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTdhMWZkNDc4ODE4OTkwZGEyNzdjYzhlOGZkODYwZiIsInN1YiI6IjY0ODA0NDM1ZTI3MjYwMDEwNzIwMWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yRx1KgEU6F07RPzX1gINlBCsBFaQUdewe6MKi-V-iY'
    }
  };

searchButton.onclick = async () => {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inputName.value}&include_adult=false&language=en-US&page=1`, options)
    let data = await response.json()
    let movie = data.results[0]
    console.log(movie)
    document.body.style.backgroundImage = 'url(after.jpg)'
    let imgPath
    imgPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    image.innerHTML = `<img src='${imgPath}' width=300 height=400'/>`
    title.innerHTML = `<h1>${movie.original_title}</h1>`
    overview.innerHTML = `<h4><i class="fa-solid fa-diamond" style="color: #a20101;"></i>
    ${movie.overview} </h4>`
    rating.innerHTML = `<h1><i class="fa-sharp fa-solid fa-star" style="color: #c7c000;"></i> ${movie.vote_average}</h1>`

    return movie
}


document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        searchButton.onclick()
    }
});






