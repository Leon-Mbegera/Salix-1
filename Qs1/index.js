// 1. Write a program to reverse a given string. For example, if we pass the word 'john', the program should return the word 'nhoj'.



// Solution 1


const reverseString = (string) => {
    const stringArrray = string.split("");
    const reversedString = stringArrray.reverse().join("");
    return reversedString;
}

// console.log(reverseString("Leon"));



// Solution 2


const reverseString2 = (string) => {
    const stringArrray = string.split("");

    const outputArray = [];

    for (let i = stringArrray.length - 1; i >= 0; i--) {
        outputArray.push(stringArrray[i])
    }

    return outputArray.join("");

}


console.log(reverseString2("Leon"))