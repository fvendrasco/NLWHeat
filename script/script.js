const socialMedia = {
github: 'fvendrasco',
youtube: 'UClFiWA8sHS-I8HInUwxyUwg',
facebook: 'felipe.vendrasco',
instagram: 'felipevendrasco',
twitter: 'VendrascoFelipe'
}

function changeSocialMedia(){
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${socialMedia[social]}`
        
    }
}
changeSocialMedia()

function getGitHubProfileInfo(){
    const url = `https://api.github.com/users/${socialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGitHub.href = data.login
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}
getGitHubProfileInfo()