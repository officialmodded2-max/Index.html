function copyScript(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Script copied!");
    });
}

function searchScripts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const scripts = document.getElementsByClassName("script-box");

    for (let i = 0; i < scripts.length; i++) {
        const name = scripts[i].getAttribute("data-name");
        if (name.includes(input)) {
            scripts[i].style.display = "block";
        } else {
            scripts[i].style.display = "none";
        }
    }
}
