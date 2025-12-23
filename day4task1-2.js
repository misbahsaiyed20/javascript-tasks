//task1

let user ={
    id: 1,
    name:"misba",
    email:"misba@gmail.com",
    role:"student",
    isActive: true
}

console.log(user.id);
console.log(user.name);
console.log(user.email);
console.log(user.role);
console.log(user.isActive);

user.isActive = false;
console.log("updated isActive:",user.isActive);

console.log("keys and values:");
for(let key in user){
    console.log (key + ":", user[key]);
}

//task2

let users = [
    { id: 1, name: "Misba", email: "misba@gmail.com", isActive: true },
    { id: 2, name: "Ayaan", email: "ayaan@gmail.com", isActive: false },
    { id: 3, name: "Sara", email: "sara@gmail.com", isActive: true },
    { id: 4, name: "Rahul", email: "rahul@gmail.com", isActive: false },
    { id: 5, name: "Neha", email: "neha@gmail.com", isActive: true }
];

let activeusers = users.filter(user => user.isActive == true);
console.log("Active Users:", activeusers);

let usernames = users.map(user => user.name);
console.log("User Names:", usernames);

let finduser = users.find(user => user.id == 3);
console.log("User with ID 3:", finduser);
