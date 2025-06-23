const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "db.json");

function randomUser() {
  const names = ["Razi", "Anjali", "Vikram", "Sara", "luffy"];
  const genders = ["male", "female"];
  return {
    id: Date.now(),
    name: names[Math.floor(Math.random() * names.length)],
    phone: "9" + Math.floor(100000000 + Math.random() * 900000000),
    gender: genders[Math.floor(Math.random() * genders.length)],
    age: Math.floor(Math.random() * 40 + 18),
  };
}

setInterval(() => {
  const db = JSON.parse(fs.readFileSync(dbPath));
  db.user.push(randomUser());
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  console.log("New user added");
}, 10000);
