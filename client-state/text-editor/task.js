const textEditor = document.getElementById('editor');
textEditor.value = localStorage.getItem('textEditorArea');

textEditor.addEventListener('input', (event) => {
    localStorage.setItem('textEditorArea', textEditor.value);
});

const clear = document.getElementById('clearTextEditorArea');

clear.addEventListener('click', () => {
    localStorage.removeItem('textEditorArea');
    textEditor.value = '';
});