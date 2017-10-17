# Sticky-Notes

## description
The application has been created with React.js, ReactDnD, Redux and Redux-Saga.
It allows adding notes to a board and managing them.
The following features has been implemented so far:
* notes list is fetched from the backend
* on click 'ADD NOTE' button, a new note is created
* new note is saved and sent to the backend
* every note is editable and removable
* every note is draggable - you can change an order of notes; the new order is sent to the backend

### in order to run the app, use the following commands in console:
in order to download dependencies:
``` bash
npm install
```
in order to build the project on Windows:
``` bash
node_modules\.bin\webpack-dev-server --hot
```
in order to build the project on Linux:
``` bash
./node_modules/.bin/webpack-dev-server --hot
```
in order to run local backend server on Windows:
```bash
node_modules\.bin\json-server db/notes.json
```
in order to run local backend server on Linux:
```bash
./node_modules/.bin/json-server db/notes.json
```
after successfully running the both servers, the app should be available at: http://localhost:3001/

## technologies used:
* React
* React DnD
* Redux
* Redux-Saga
* react-alert
* immutability-helper
* Jest 
* Sass
* Bootstrap
* Fetch
* JSON server
* Webpack

## improvements to be implemented:
* sagas unit tests to be added
