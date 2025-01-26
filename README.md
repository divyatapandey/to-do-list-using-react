# Your Task Hub

Your Task Hub is a dynamic to-do application that allows users to add tasks, store them permanently in the database, and view changes in real-time. With a delete functionality, tasks can be removed dynamically, providing a seamless user experience.

## Features

- Add tasks dynamically and display them instantly.
- Tasks are permanently stored in the database.
- Delete tasks with real-time updates.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Architecture**: MERN Stack

## Folder Structure 
```bash
project-root/
│
├── backend/
│   ├── models/
│   │   ├── todomodel.js
│   ├── routes/
│   │   ├── routers.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   ├── task.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src/
│   │   ├── Components/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── .gitignore

```
## Instructions to Run Locally:

1. Clone the repository:

```bash
git clone https://github.com/divyatapandey/to-do-list-using-react.git

cd to-do-list-using-react
```
2. Set up the Backend:

- Navigate to the backend folder:

```bash
cd backend
```
- Install the dependencies for the backend:
npm install
Ensure that you have a .env file in the backend folder with the necessary environment variables (e.g., database credentials, port number). If not, create one based on your setup.

3. Start the backend server:

```bash
node index.js
```
The backend should now be running, usually on http://localhost:5000.

4. Set up the Frontend:

- Navigate to the frontend folder:

```bash
cd ../frontend
```
- Install the dependencies for the frontend:
```bash
npm install
```
5. Start the frontend server:
``` bash
npm start
```
The frontend should now be running, usually on http://localhost:3000.

Accessing the Application:

Open your browser and go to http://localhost:3000 for the frontend.
Ensure the backend is running at http://localhost:5000 or your configured port.

Happy task managing! 
