# Hospital Document Management System

This project is a simple web platform made for managing hospital documents, checking user sessions, and loading external data.

---

## 🛠️ Main Features and functionality

### 🔐 Login and Session Check
* Protects the dashboard page so users cannot access it without typing a username first.
* Saves the username in `sessionStorage` to display who is connected on the top of the dashboard.
* Disconnects the user and completely clears the session when clicking the "Logout" button.

### 📁 Document Management Feature
* Allows the user to enter a patient's name and a document type into a form.
* Saves the new document safely in `localStorage` so the data stays there even if you refresh the browser.
* Displays the documents inside a clean, structured table on the screen.
* Shows an automatic counter at the top that updates the total number of documents instantly.
* Includes a "Delete" button inside each row to remove that specific document from the list.

### 🔍 Search Patient Filter
* Uses a search bar that filters the rows of the patient table on the screen as you type.
* Instantly matches the characters without needing to click any button or reload the page.

### 🌐 External Data Sync
* Uses a button to fetch external user data directly from an online test link (`jsonplaceholder`).
* Displays the loaded external data inside custom cards on the page.
* Shows an error message if the internet connection fails or the link doesn't respond.

---

## 📊 Code Implementation Overview

| Feature Module | Tech Used | JavaScript Methods / Properties | Storage Type |
| :--- | :--- | :--- | :--- |
| **User Authentication** | DOM & Web Storage | `getElementById()`, `setItem()`, `removeItem()` | `sessionStorage` |
| **Document Form** | DOM Manipulation | `addEventListener()`, `createElement()`, `appendChild()` | `localStorage` |
| **Live Counter** | Dynamic Text Updates | `textContent`, `clear()` operations | Live State |
| **Search Filter** | Event Input Parsing | `value.toLowerCase()`, `includes()`, `style.display` | Live State |
| **External Registry** | AJAX Asynchronous API | `fetch()`, `async / await`, `json()` | External API |

---

## 📁 Files in This Project

* **login.html** – The login card interface.
* **index.html** – The main hospital dashboard layout containing the forms and data table.
* **style.css** – The design, colors, and layout structure.
* **auth.js** – The JavaScript file handling the login action.
* **app.js** – The main JavaScript file handling the table rows, counters, search bar, and API data.

---

## 🚀 How to Run the Project

1. Open the project folder on your computer.
2. Double-click on `login.html` to open it in your web browser.
3. Enter a username to test the login process and enter the dashboard.
4. Try adding a patient, searching for a name in the table, deleting a row, or clicking the button to load external data.