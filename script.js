/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

const display = document.getElementById("display");
const orderedList = document.createElement("ol");

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  display.innerHTML = "";
  orderedList.innerHTML = "";
  arr.map((emp) => {
    if (emp.profession === "developer") {
      console.log(JSON.stringify(emp));
      const listItem = document.createElement("li");
      listItem.innerHTML = `Name- ${emp.name} , Age: ${emp.age} , Profession: ${emp.profession} .`;
      orderedList.appendChild(listItem);
    }
  });
  display.appendChild(orderedList);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  display.innerHTML = "";
  orderedList.innerHTML = "";
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(JSON.stringify(emp));
      const listItem = document.createElement("li");
      listItem.innerHTML = `Name- ${emp.name} , Age: ${emp.age} , Profession: ${emp.profession} .`;
      orderedList.appendChild(listItem);
    }
  });
  display.append(orderedList);
}

function addData() {
  //Write your code here, just console.log
  display.innerHTML = "";
  orderedList.innerHTML = "";
  let newEmp = { id: 4, name: "Souvik", age: "25", profession: "CA" };
  arr.push(newEmp);
  arr.map((emp) => {
    console.log(JSON.stringify(emp));
    const listItem = document.createElement("li");
    listItem.innerHTML = `Name- ${emp.name} , Age: ${emp.age} , Profession: ${emp.profession} .`;
    orderedList.appendChild(listItem);
  });
  display.append(orderedList);
}

function removeAdmin() {
  //Write your code here, just console.log
  display.innerHTML = "";
  orderedList.innerHTML = "";
  arr = arr.filter((emp) => emp.profession !== "admin");
  arr.map((emp) => {
    console.log(JSON.stringify(emp));
    const listItem = document.createElement("li");
    listItem.innerHTML = `Name- ${emp.name} , Age: ${emp.age} , Profession: ${emp.profession} .`;
    orderedList.appendChild(listItem);
  });
  display.append(orderedList);
}

function concatenateArray() {
  //Write your code here, just console.log
  display.innerHTML = "";
  orderedList.innerHTML = "";
  let arr1 = [
    { id: 5, name: "Souvik", age: "18", profession: "developer" },
    { id: 6, name: "Lucy", age: "20", profession: "developer" },
    { id: 7, name: "Gojeta", age: "19", profession: "admin" },
  ];
  arr = arr.concat(arr1);
  arr.map((emp) => {
    console.log(JSON.stringify(emp));
    const listItem = document.createElement("li");
    listItem.innerHTML = `Name- ${emp.name} , Age: ${emp.age} , Profession: ${emp.profession} .`;
    orderedList.appendChild(listItem);
  });
  display.append(orderedList);
}
