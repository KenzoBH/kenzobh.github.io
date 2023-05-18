
const lazy_loading = () => {
    const medias = document.querySelectorAll('[data]')

    medias.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.src = element.getAttribute('data')
            element.removeAttribute('data')
        }
    })
}

window.onload = () => {
    lazy_loading()
}

window.onscroll = () => {
    lazy_loading()
}
