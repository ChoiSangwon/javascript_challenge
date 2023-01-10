const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();
  console.log(respData);
  createUserCard(respData);

  getRepos(username);
}

async function getRepos(username) {
  const resp = await fetch(APIURL + username + `/repos`);
  const respData = await resp.json();

  addReposToCard(respData);
}

// getUser("itjustbong");

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");

    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.login}" />
      </div>
      <div class="name">
        <h2>${user.login}</h2>
        <p>${user.bio}</p>

        <ul class="info">
          <li>${user.followers}<strong>Follwers</strong></li>
          <li>${user.following}<strong>Following</strong></li>
          <li>${user.public_repos}<strong>repos</strong></li>
        </ul>
        <h3>Repos:</h3>
        <div id="repos"></div>
      </div>
    </div>

  `;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  console.log(user);
  if (user) {
    getUser(user);

    search.value = "";
  }
});
