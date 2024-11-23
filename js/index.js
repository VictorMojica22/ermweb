let sec = document.querySelectorAll('.selectMenu');
let links = document.querySelectorAll('nav a');

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 60;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            links.forEach((link) => {
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}



function enviarFormulario(e){
    let spinner = document.getElementById('spinner');
    let cuadroTexto = document.getElementById('cuadroTexto')
    spinner.removeAttribute('hidden')
    setTimeout(() => {
        spinner.setAttribute('hidden', true)
        cuadroTexto.innerText='Mensaje enviado'
        cuadroTexto.classList.add('cuadroTexto')
    }, 3000)
}