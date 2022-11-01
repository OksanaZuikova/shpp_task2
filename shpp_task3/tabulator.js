var tabledata = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкин", age: 15 },
];
var table = new Tabulator("#example-table", {
  layout: "fitDataFill",
  height: "311px",
  data: tabledata, //assign data to table
  columns: [
    { title: "Имя", field: "name" },
    { title: "Фамилия", field: "surname" },
    { title: "Возраст", field: "age" },
  ],
});
