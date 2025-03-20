let cityName = prompt("Введите название города:");


let persons = [
  { name: "John", age: 25, city: "NewYork" },
  { name: "Alice", age: 30, city: "London" },
  { name: "Bob", age: 22, city: "Paris" },
  { name: "Alex", age: 19, city: "London" },
  { name: "Tyler", age: 24, city: "NewYork" },
  { name: "Constantine", age: 31, city: "Paris" },
  { name: "Cole", age: 21, city: "London" },
];


let findPersonsByCity = (city, persons) => {
  return persons.filter(person => person.city === city);

};

console.log(findPersonsByCity(cityName, persons)); // Вывод в консоль найденных людей

// // 2. функция calculateAverageAge вычисляет средний возраст в массиве persons
let calculateAverageAge = (persons) => {
  let totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  return totalAge / persons.length;
};

console.log("Средний возраст:", calculateAverageAge(persons));

// 3. функция addNewPerson добавляет нового пользователя в массив по переданным как на примере
let newPerson = prompt("Добавить человека");

let addNewPerson = (newPers) => {
  // пишем код
  console.log(persons);


}

addNewPerson(newPerson)