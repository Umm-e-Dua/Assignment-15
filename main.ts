// 15 Assignment
let guestList = ["Anus","Aira","Dua","rimsha"];
let dontcome = guestList[0];
console.log(dontcome,"nhi a sakta");
guestList.splice(0,1, "nehal");
guestList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me?`));