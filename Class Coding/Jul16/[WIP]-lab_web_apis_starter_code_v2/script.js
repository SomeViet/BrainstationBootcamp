const testURL = "https://reqres.in/api/users?page=2";

// 3.
axios
    .get(testURL)
    .then((result) => {
        console.log(result.data);
    })
    .catch((error) => {
        console.log(error);
    });

// 4.
axios
    .get(testURL)
    .then((result) => {
        let resPage = document.querySelector(".res__page");
        let resTotalPage = document.querySelector(".res__total-pages");
        resPage.innerText = result.data.page;
        resTotalPage.innerText = result.data.total_pages;
    })
    .catch((error) => {
        console.log(error);
    });

axios
    .get(testURL)
    .then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
            // list structure
            let attach = document.querySelector(".res-users");
            let list = document.createElement("li");
            let image = document.createElement("img");
            let spanName = document.createElement("span");
            let spanEmail = document.createElement("span");

            // username
            spanName.innerText =
                result.data.data[i].first_name +
                " " +
                result.data.data[i].last_name;
            spanName.classList.add("res-users__name");

            // avatar
            image.classList.add("res-users__avatar");
            image.setAttribute("src", result.data.data[i].avatar);
            image.style.height = "50px";

            // Email
            spanEmail.innerText = result.data.data[i].email;
            spanEmail.classList.add("res-users__email");

            // Piecing Together
            list.appendChild(image);
            list.appendChild(spanName);
            list.innerHTML += " - ";
            list.appendChild(spanEmail);
            attach.appendChild(list);
        }
    })
    .catch((error) => {
        console.log(error);
    });

// next

axios
    .get(testURL)
    .then((result) => {
        let test1 = JSON.stringify(result.data.support);
        let resAd = document.querySelector(".res__ad");

        resAd.innerText = test1;
    })
    .catch((error) => console.log(error));
