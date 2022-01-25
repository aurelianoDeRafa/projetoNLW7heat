/**um objeto com os nomes da rede social */
const LinksSocialMedia = {
  github: "aurelianoDeRafa",
  youtube: "test",
  facebook: "blabla",
  instagram: "leafar.dev",
  linkedin: "in/aureliano-silva-1923a421b/"
}

function changrSocialMediaLinks() {
  /**vai fazer um loop pegando os filhos do ul(com id=socialLinks) */
  for(let li of socialLinks.children) {

    /**ele vai pega o atributo class e guarda na variavel social */
    const social = li.getAttribute('class')
    
    /**No html cada (li) tem uma class com nome (youtube, instagram...) */
    li.children[0].href = `https://${social}.com/${
      LinksSocialMedia[social]
    }`

  }
}

changrSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()