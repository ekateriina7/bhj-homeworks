const editor = document.getElementById('editor');
const clearButton = document.getElementById('clear');

function putInLocal() {
    localStorage.text = editor.value;
}

function showFromLocal() {
    if (localStorage.text) {
        editor.value = localStorage.text;
    }
}
editor.addEventListener('input', putInLocal);
window.addEventListener('load', showFromLocal);

clearButton.addEventListener('click', clear)
function clear(event){
    event.preventDefault()
    localStorage.clear();
    editor.value = '';
}