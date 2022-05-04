function importText() {
    text = document.getElementById('importSets').value;

    localStorage.setItem('text', text);
}