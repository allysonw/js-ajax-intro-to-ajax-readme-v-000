function getRepositories() {
  const req = new XMLHttpRequest()

  req.addEventListener("load", showRepositories)
  req.open("GET", 'https://api.github.com/users/allysonw/repos')
  req.send()
}

function getCommits(element) {
  const req = new XMLHttpRequest()
  debugger;
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/allysonw/' + element.dataset.repo + '/commits')
  req.send()
}

function showRepositories(event) {

  const repos = JSON.parse(this.responseText)

  const repoList = `<ul>${repos.map(repo => '<li>' + repo.name + '- <a href="#" data-repo="' + repo.name + '" onclick="getCommits(this)">Get Commits</a></li>').join(' ')}</ul>`

  document.getElementById("repositories").innerHTML = repoList
}

function showCommits(event) {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li>' + commit.author.login + ' - ' + commit.commit.message + '</li>').join(' ')}</ul>`

  document.getElementById("commits").innerHTML = commitsList
}
