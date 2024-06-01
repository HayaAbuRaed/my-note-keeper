# My Note Keeper Application
Welcome to the Note Keeping Application! This repository contains a full-stack application built with Node.js, Express.js, MongoDB for the backend, and React.js for the frontend. The application allows users to perform CRUD operations on notes.

<br /> <br />

<div align="center">
  <img src="https://github.com/HayaAbuRaed/my-note-keeper/assets/123592435/c9a48c66-71da-4cf3-82d7-b8268d7a3fb2" alt="view" width=500/>
</div>

<br /> <br />


<!-- ## 📚 Table of Contents

- [Features](#-features)
- [Backend](#-backend)
  - [Setup Instructions](#setup-instructions)
  - [Endpoints](#endpoints)
- [Frontend](#-frontend)
  - [Setup Instructions](#setup-instructions-1)
  - [Features](#features-1)
- [Development](#-development)
--> 

## ✨ Features

- Create, Read, Update, and Delete (CRUD) notes.
- Search notes by title or content.
- Paginate the list of notes.
- User-friendly interface with dialogs for adding, updating, and deleting notes.

<br />  <br />

## 🔧 Backend

The backend is built with ![Static Badge](https://img.shields.io/badge/Node.js-blue?style=flat-square&logo=Node.js&logoColor=%23417e38&labelColor=%23f1f1f1&color=%23417e38)
,![Static Badge](https://img.shields.io/badge/Express.js-blue?style=flat-square&logo=Express&logoColor=%23838383&labelColor=%23f1f1f1&color=%23838383)
, ![Static Badge](https://img.shields.io/badge/MongoDB-blue?style=flat-square&logo=MongoDB&labelColor=%23f1f1f1&color=%2307ac4f) , and ![Static Badge](https://img.shields.io/badge/nodemon-green?style=flat-square&logo=nodemon&labelColor=%23f1f1f1&color=%2376d04b)
 for development
. <br />  <br />
It provides a REST API for the note-keeping functionality.

<br />

### ⚙️ Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo/Backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
   - For production:
      ```bash
      npm start
      ```
    - For development (with automatic restarts using `nodemon`):
      ```bash
      npm run dev
      ```
<br />

### 🌐 Endpoints

- **GET /notes**: Retrieve all notes.
- **POST /notes**: Add a new note.
- **DELETE /notes/:id**: Delete a specific note using its ID.
- **PUT /notes/:id**: Update a specific note using its ID.
<!-- - **GET /notes/search?query=YOUR_QUERY**: Search notes by their title or content. -->
<!-- - **GET /notes?page=1&limit=10**: Paginate notes retrieval. -->

<br />

### 🚀 Deployment

The backend section is deployed using ![Static Badge](https://img.shields.io/badge/Render-green?style=flat-square&logo=render&logoColor=%23000&labelColor=%23f1f1f1&color=%23000)
. It is available through: [https://notes-keeper-do4x.onrender.com](https://notes-keeper-do4x.onrender.com) 

<br />  <br />

## 💻 Frontend

The frontend is built with <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=react&labelColor=%23f2f2f2&color=%2361DAFB" width="79" /> and ![Static Badge](https://img.shields.io/badge/css%20modules-green?style=flat-square&logo=css%20modules&logoColor=%23000&labelColor=%23f1f1f1&color=%23000)
. It provides a user-friendly interface for interacting with the note-keeping application.

<br />

### ⚙️ Setup Instructions

1. Navigate to the `frontend` folder:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the development server:
    ```bash
    yarn start
    ```
    
<br />

### 🌟 Features

1. Display all notes.
2. Add a new note.
3. Update an existing note.
4. Delete a note.
5. Search notes by title or content.
7. User-friendly dialogs and confirmations for note operations.

<br />

### 👁️ Visual Features

- Clicking on the note field expands it to allow adding a title and content.
- Clicking on "Cancel" resets the fields and collapses the note field.
- Clicking on a note shows a dialog with the note values, allowing updates.
- Hovering over a note card shows a trash icon, and clicking it shows a confirmation dialog.

<br />

### 🚀 Deployment

The frontend is deployed using ![Static Badge](https://img.shields.io/badge/Netlify-any?style=flat-square&logo=Netlify&labelColor=%23f1f1f1&color=%2314c1be)
. Follow [this link](https://my-note-keeperr.netlify.app) to have a look.

<br /> <br />

##
<p align="center">
	✨ I'll be glad seeing your feedback, feel free to reach out! ✨
</p>
