function log(value) {
	console.log(value);
	return value;
}
const numberArr = [1, 2, 3, 4, 5];
log(numberArr.includes(5)); // true
const stringArr = ["1", "2", "3"];
log(stringArr.includes(2)); // false
const objArr = [
	{ name: "lee", age: 24 },
	{ name: "lgo", age: 23 },
	{ name: "song", age: 25 }
];
log(objArr.includes({ name: "lee" })); // false
log(objArr.includes({ name: "lee", age: 24 })); // false;
