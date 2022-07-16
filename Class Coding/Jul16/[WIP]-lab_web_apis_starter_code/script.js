const pagecount = document.querySelector(".res__page");
const totalpagecount = document.querySelector(".res__total-pages");
const userdata = document.querySelector(".res-users");

//4a.
axios.get("https://reqres.in/api/users?page=2").then((response) => {
    console.log(response.data);
    pagecount.innerText = response.data.page;
    totalpagecount.innerText = response.data.total_pages;
    console.log(response.data.data);

    //4b.

    const user = document.createElement("li");
    const userName = document.createElement("span");
    const userEmail = document.createElement("span");
    const userAvatar = document.createElement("img");

    for (let i = 0; i < response.data.data.length; i++) {
        console.log(response.data.data[i]);
        userName.innerText =
            response.data.data[i].first_name +
            " " +
            response.data.data[i].last_name;
        user.appendChild(userName);
        userdata.appendChild(user);
    }
});
