function login() {

    const username =
        document.getElementById("username").value.trim();

    if (username === "") {
        return;
    }

    sessionStorage.setItem("user", username);

    window.location.href = "index.html";
}