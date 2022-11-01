function DataTable(config, data) {
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
  const tbody = document.createElement("tbody");
  table.append(tbody);
  let num = 1;
  data.forEach(function (value) {
    const tr2 = document.createElement("tr");
    tbody.append(tr2);
    const td = document.createElement("td");
    td.innerHTML = num;
    tr2.append(td);
    num++;
    for (let i = 0; i < config.columns.length; i++) {
      let a = config.columns[i].value;
      let td1 = document.createElement("td");
      td1.innerHTML = value[`${a}`];
      tr2.append(td1);
    }
    tbody.append(tr2);
  });
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Имя", value: "name" },
    { title: "Фамилия", value: "surname" },
    { title: "Возраст", value: "age" },
  ],
};

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкин", age: 15 },
  { id: 30051, name: "Юра", surname: "Васечкин", age: 13 },
];

DataTable(config1, users);
