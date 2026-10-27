const arr = [];
const n = Number(prompt("Enter value:"));
for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("Enter number:")));
}
console.log("array:", arr);
const data = arr.filter(e => e % 2 === 0);
console.log("Even numbers:", data);