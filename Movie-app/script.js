const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function getMovie() {
  const res = await fetch(APIURL);
  const resData = await res.json();

  console.log(resData);
  resData.results.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    
    <div class="movie">
      <img
        class="movieImg"
        src=${IMGPATH + movie.poster_path}
      />
      <div class="movieIntro">
        <div>${movie.original_title}</div>
        <span>${movie.vote_average}</span>
      </div>
    </div>
    `;
    document.body.appendChild(movieEl);

    movieEl.addEventListener("mouseover", () => {
      console.log(movie.original_title);
    });
    // document.body.appendChild(img);
  });
  // const img = document.createElement("img");
  // img.src = arr[0];
  // document.body.appendChild(img);
  return resData;
}
getMovie();
