const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=australia`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    //console.table(unis[0].name);
    //let firstuni = unis[0];
    res.render("index", {uni_data: unis, title: "Australia"});
});

app.get("/france", async (req, res) => {

    let url = `http://universities.hipolabs.com/search?country=france`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    //console.table(unis[0].name);
    //let firstuni = unis[0];
    res.render("index", {uni_data: unis, title: "France"});
});

app.get("/denmark", async (req, res) => {

    let url = `http://universities.hipolabs.com/search?country=denmark`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    //console.table(unis[0].name);
    //let firstuni = unis[0];
    res.render("index", {uni_data: unis, title: "Denmark"});
});

app.get("/usa", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=united+states`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    //console.table(unis[0].name);
    //let firstuni = unis[0];
    res.render("index", {uni_data: unis, title: "USA"});
});

app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});