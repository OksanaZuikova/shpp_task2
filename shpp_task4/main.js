function DataTable(config, data) {
  if (data === undefined) {
    fetch(config.apiUrl).then((response) => {
      return response.json().then((value) => {
        let data = [];
        for (let a in value.data) {
          value.data[a].id = a;
          data.push(value.data[a]);
        }
        DataTable(config, data);
      });
    });
  } else {
    const parent = document.querySelector(`${config.parent}`);
    const table = document.createElement("table");
    parent.append(table);
    const thead = document.createElement("thead");
    table.append(thead);
    const tr = document.createElement("tr");
    thead.append(tr);
    const th1 = document.createElement("th");
    th1.append(document.createTextNode("№"));
    tr.append(th1);
    config.columns.forEach(function (value) {
      let th = document.createElement("th");
      let text = document.createTextNode(`${value.title}`);
      th.append(text);
      tr.append(th);
    });
    const th2 = document.createElement("th");
    th2.innerHTML = "Действия";
    tr.append(th2);
    const tbody = document.createElement("tbody");
    table.append(tbody);
    let num = 1;
    data.forEach(function (value) {
      const tr2 = document.createElement("tr");
      tbody.append(tr2);
      const td = document.createElement("td");
      td.innerHTML = num;
      tr2.append(td);

      for (let i = 0; i < config.columns.length; i++) {
        let a = config.columns[i].value;
        let td1 = document.createElement("td");
        td1.innerHTML = value[`${a}`];
        tr2.append(td1);
      }
      let td2 = document.createElement("td");
      let redButton = document.createElement("button");
      redButton.innerHTML = "Удалить";
      redButton.setAttribute("data-id", value.id);
      td2.append(redButton);
      tr2.append(td2);
      num++;
      tbody.append(tr2);
      redButton.onclick = deleteUser;
    });
    let addButton = document.getElementById("add");
    addButton.onclick = function () {
      addUser(tbody, data);
    };
  }
}

async function deleteUser(event) {
  console.log(event);
  let id = event.currentTarget.dataset.id;
  await fetch(`${config1.apiUrl}/${id}`, {
    method: "DELETE",
  }).then(() => location.reload());
}

function addUser(elem, data) {
  let tr = document.createElement("tr");
  tr.append(document.createElement("td"));
  for (key in data[0]) {
    if (key === "id") {
      continue;
    }
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("data-input", `${key}`);
    td.append(input);

    input.type = "text";
    tr.append(td);
  }
  elem.before(tr);
  let inputs = document.querySelectorAll("[data-input]");
  inputs.forEach((value) => {
    value.addEventListener("keydown", doPost);
  });
}

function doPost(event) {
  if (event.code === "Enter") {
    let user = {};
    let post = true;
    event.preventDefault();
    let inputs = document.querySelectorAll("[data-input]");
    inputs.forEach((value) => {
      if (value.value === "") {
        value.classList.add("red-border");
        post = false;
      } else {
        value.classList.remove("red-border");
      }
    });
    if (post) {
      inputs.forEach((value) => {
        user[`${value.dataset.input}`] = value.value;
      });
      postUser(user)
        .then(() => location.reload())
        .then((data) => {
          console.log(data);
        });
    }
  }
}
async function postUser(user) {
  const response = await fetch(`${config1.apiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
  //  console.log("DONE:", JSON.stringify(json));
}
const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Имя", value: "name" },
    { title: "Фамилия", value: "surname" },
    { title: "День рождения", value: "birthday" },
    { title: "Аватар", value: "avatar" },
  ],
  apiUrl: "https://mock-api.shpp.me/ozuikova/users",
};

DataTable(config1);
