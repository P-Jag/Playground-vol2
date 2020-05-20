const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name = "users"]').value;
  const gender = document.querySelector('[name = "gender"]').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    gender === "both" ? "male,female" : gender
  }`;

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error("It's not a 200");
      } else {
        return response.json(); //fetch api and parse to jsobject (from body)
      }
    })
    .then((json) => showUsers(json.results))
    .catch((err) => console.log(err));
};

const showUsers = (users) => {
  const resultArea = document.querySelector(".user-list");
  resultArea.textContent = "";
  users.forEach((user) => {
    const item = document.createElement("div");
    item.className = "user";
    item.innerHTML = `
      <div class="user__name">
        ${user.name.title.toUpperCase()} 
        ${user.name.first.toUpperCase()}
        ${user.name.last.toUpperCase()}
      </div>
      <img class="user__image" src="${user.picture.medium}">`;

    resultArea.appendChild(item);
  });
};

document.querySelector(".generator").addEventListener("submit", getUsers);
