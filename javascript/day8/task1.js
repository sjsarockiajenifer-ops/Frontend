function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

console.log(checkEvenOdd(10));

function findLargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findLargest(25, 40));

function checkVote(age) {
    if (age >= 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }
}

console.log(checkVote(20));

function getTotal(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(getTotal([10, 20, 30, 40, 50]));

function countEven(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven([10, 15, 20, 25, 30, 35, 40]));