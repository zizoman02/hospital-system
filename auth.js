function login() {
    const username = document.getElementById("username").value;

    if (username.trim() !== "") {
        sessionStorage.setItem("user", username);
        window.location.href = "index.html";
    }
}