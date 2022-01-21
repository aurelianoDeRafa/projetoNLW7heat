const LinksSocialMedia = {
  github: "aurelianoDeRafa",
  youtube: "test",
  facebook: "blabla",
  instagram: "leafar.dev",
}

function changrSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')
    
    li.children[0].href = `https://${social}.com/${
      LinksSocialMedia[social]
    }`

    alert(li.children[0].href)
  }
}

changrSocialMediaLinks()