// 2. Given an integer array with positive numbers from 0 to x, find the missing numbers and return them as an array. For example, given an array with the following numbers (0, 1, 2, 5, 14, 17, 18, 19, 20), the missing numbers are (3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16).


const findNums = (intArray) => {
    const outputArray = [];

    for (let i = 1; i < intArray.length; i++) {
        if ((intArray[i] - intArray[i - 1]) !== 1) {
            let missingNums = (intArray[i] - intArray[i - 1]) - 1;
            let currentNum = intArray[i - 1];
            while (missingNums > 0) {
                currentNum++;
                outputArray.push(currentNum)
                missingNums -= 1;
            }
        }
    }

    return outputArray;
}

// console.log(findNums([0, 1, 2, 5, 14, 17, 18, 19, 20]))