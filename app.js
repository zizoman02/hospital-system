let documents = JSON.parse(localStorage.getItem("documents")) || [];


const user = sessionStorage.getItem("user");

if (!user) {
    window.location.href = "login.html";
}


function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}


function addDocument() {

    const patient = document.getElementById("patient").value;
    const type = document.getElementById("type").value;

    if (!patient || !type) return;

    const doc = {
        patient,
        type
    };

    documents.push(doc);

    localStorage.setItem("documents", JSON.stringify(documents));

    render();
}


function render() {

    const list = document.getElementById("list");
    list.innerHTML = "";

    documents.forEach((d, i) => {
        list.innerHTML += `
            <li>
                ${d.patient} - ${d.type}
                <button onclick="removeDoc(${i})">Delete</button>
            </li>
        `;
    });
}

function removeDoc(index) {
    documents.splice(index, 1);
    localStorage.setItem("documents", JSON.stringify(documents));
    render();
}


function loadData() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {

            let output = "";

            data.forEach(user => {
                output += `<p>${user.name} — ${user.email}</p>`;
            });

            document.getElementById("api").innerHTML = output;
        });
}

render();