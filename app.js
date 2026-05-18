const user = sessionStorage.getItem("user");

if (!user) {
    window.location.href = "login.html";
}

document.getElementById("userDisplay").textContent = user;

let documents =
    JSON.parse(localStorage.getItem("documents")) || [];

function updateStats() {

    document.getElementById("totalDocs")
        .textContent = documents.length;
}

function addDocument() {

    const patient =
        document.getElementById("patient").value.trim();

    const type =
        document.getElementById("type").value.trim();

    if (patient === "" || type === "") {
        return;
    }

    const documentData = {
        patient,
        type
    };

    documents.push(documentData);

    localStorage.setItem(
        "documents",
        JSON.stringify(documents)
    );

    renderDocuments();

    document.getElementById("patient").value = "";
    document.getElementById("type").value = "";
}

function renderDocuments(filteredDocuments = documents) {

    const list =
        document.getElementById("documentList");

    list.innerHTML = "";

    filteredDocuments.forEach((doc, index) => {

        list.innerHTML += `
            <li>
                <span>
                    ${doc.patient} - ${doc.type}
                </span>

                <button onclick="deleteDocument(${index})">
                    Delete
                </button>
            </li>
        `;
    });

    updateStats();
}

function deleteDocument(index) {

    documents.splice(index, 1);

    localStorage.setItem(
        "documents",
        JSON.stringify(documents)
    );

    renderDocuments();
}

function searchDocuments() {

    const searchValue =
        document.getElementById("search")
        .value
        .toLowerCase();

    const filtered =
        documents.filter(doc =>
            doc.patient
                .toLowerCase()
                .includes(searchValue)
        );

    renderDocuments(filtered);
}

async function loadData() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data = await response.json();

        let output = "";

        data.forEach(user => {

            output += `
                <div class="user-card">

                    <h4>${user.name}</h4>

                    <p>${user.email}</p>

                    <p>${user.company.name}</p>

                </div>
            `;
        });

        document.getElementById("apiData")
            .innerHTML = output;

    } catch(error) {

        document.getElementById("apiData")
            .innerHTML =
            "Unable to load external data.";

        console.log(error);
    }
}

function logout() {

    sessionStorage.clear();

    window.location.href = "login.html";
}

renderDocuments();