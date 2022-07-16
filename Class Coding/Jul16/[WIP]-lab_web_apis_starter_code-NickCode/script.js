function debug(text) {
    console.log(text);
}

const resPage = document.querySelector(".res__page");
debug(resPage);
const resTotalPages = document.querySelector(".res__total-pages");
debug(resTotalPages);
const resUsersList = document.querySelector(".res-users");
debug(resUsersList);

const usersURL = "https://reqres.in/api/users?page=1";
axios.get(usersURL).then((response) => {
    debug(response.data);
    // 4.a
    resPage.innerText = response.data.page;
    resTotalPages.innerText = response.data.total_pages;

    // 4.b

    for (let i = 0; i < response.data.data.length; i++) {
        // define elements
        const user = document.createElement("li");
        const userName = document.createElement("span");
        const userEmail = document.createElement("span");
        const userAvatar = document.createElement("img");

        // Setting the user's avatar from the API
        userAvatar.setAttribute("src", response.data.data[i].avatar);
        userAvatar.classList.add("res-users__avatar");
        userAvatar.setAttribute("height", 50);

        // Setting the user's name from the API
        userName.innerText =
            response.data.data[i].first_name +
            " " +
            response.data.data[i].last_name;
        userName.classList.add("res-users__name");

        // Setting the user's email from the API
        userEmail.innerText = response.data.data[i].email;
        userEmail.classList.add("res-users__email");

        // Appending all data into the <li> element
        user.appendChild(userAvatar);
        user.innerHTML += " ";
        user.appendChild(userName);
        user.innerHTML += " - ";
        user.appendChild(userEmail);

        // Appending the <li> element to the Users <ul> element
        debug("userrrrr", user);
        resUsersList.appendChild(user);

        //******NOT PRETTY... stringified */
        // Had to end the innerHTML of the new <li> element with '</li>'
        //debug(resUsersList)
        resUsersList.innerHTML += "</li>";

        // This part may be okay !NOT PRETTY... resetting the innerHTML of each document object so it creates a new <li> at the start of the for loop
        user.innerHTML = "";
        userName.innerHTML = "";
        userEmail.innerHTML = "";
        userAvatar.innerHTML = "";
        //********** */
    }
});
