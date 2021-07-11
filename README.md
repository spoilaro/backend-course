<h1>Course project</h1>

<h2> About this repository </h2>
This repository was made by Johannes Haapanen for a back-end course. It contains the course work folder and the project folder.

<h2>Overall</h2>

Overall the course project was quite nice to do, since it was quite refreshing to create something you already knew how create before hand. Because of that before-hand exprience I chose to use Typescript for this project because I had very little experience with it but I had seen the tooling be very helpfull thing in other people projects.

You can see the project running in [here](https://lut-my.sharepoint.com/:v:/g/personal/johannes_haapanen_student_lut_fi/EVKTG8BjGvtLkvrsjQbxlwYB1gucAD5iTPcjpQ7fdAwXrg?e=hh1EQj)

<h2>How to run</h2>

1. Cd into /inventory-app/server
2. Create .env file with parameters specified below
3. Run "npm install"
4. Run "npm start"
5. Server is running!
6. You can test the api making request to [here](http://localhost:3001/) (This link uses the port provided in this file)
7. Optionally you can use included rest file to to queries to the api.

<h3>.env file:</h3>
PORT=3001
DB_URI=mongodb+srv://admin:admin@inventory.5y4vn.mongodb.net/inventory_db?retryWrites=true&w=majority

<h2> Routes </h2>


- / for health check
- /api contains all the interactions with the database
- See more examples in the route.rest file.


<h2>Want to make code changes?</h2>

1. Run "npm i"
2. Make code changes to the typescript files
3. Run "npm run build" to compile typescript to javascript into dist folder
4. Run "npm start"
5. Optionally you can use "npm dev" to auto compile code for faster developement
