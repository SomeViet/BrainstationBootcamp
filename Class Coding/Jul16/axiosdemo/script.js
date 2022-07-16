const chuckNorrisContainer = document.querySelector(".chucknorris-container");
const catImgContainer = document.querySelector(".catimgselector");

// Chuck Norris Jokes

// http://api.icndb.com/jokes/random

axios
    .get("http://api.icndb.com/jokes/random")
    // you can dive deeper into the object with dot notation
    .then((result) => {
        console.log(result.data.value.joke);
        chuckNorrisContainer.innerText = result.data.value.joke;
    })
    .catch((error) => {
        chuckNorrisContainer.innerText = "failed to get joke, please try again";
    });

// https://aws.random.cat/meow

axios.get("https://aws.random.cat/meow").then((result) => {
    console.log(result.data.file);
    const img = document.createElement("img");
    img.setAttribute("src", result.data.file);
    catImgContainer.appendChild(img);
});

// POSTing

axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
    // console.log("Get Posts: ", result.data);
});

axios
    .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Kevin is awesome",
        body: "Do you want to rock and roll?",
        userID: 91872,
    })
    .then((result) => {
        console.log(result.data);
    });
