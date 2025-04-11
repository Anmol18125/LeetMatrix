function sayHi(person: string) {
    return "Hello, " + person;
}

var customer: string[] = ["Tom", "Harry", "Jack"];
var greeting = "";

for (var i = 0; i < customer.length; i++) {
    greeting += sayHi(customer[i]) + "<br>";
}

document.body.innerHTML = greeting;
