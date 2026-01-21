function copyScript(id) {
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert("Script copied to clipboard!");
    }).catch(() => {
        alert("Copy failed.");
    });
}
