import "./styles.css";

let charsArray = [];
let shuffled = [];

for (let i = 97; i < 97 + 26; i++) {
  let c = String.fromCharCode(i);
  charsArray.push(c);
}

let count = 26;
while (count > 0) {
  let num = Math.floor(Math.random() * count);
  shuffled.push(charsArray[num]);
  charsArray.splice(num, 1);
  count--;
}

console.log(shuffled);
