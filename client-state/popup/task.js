const popup = document.getElementById('subscribe-modal');
const closeButton = popup.querySelector('.modal__close');

window.addEventListener('load', cookie);
closeButton.addEventListener('click', close);

function cookie() {
    if (!getCookie('closed')) {
        popup.classList.add('modal_active');
    }
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

function close(event) {

    event.preventDefault();

    document.cookie = 'closed = true';
    popup.classList.remove('modal_active');
}

