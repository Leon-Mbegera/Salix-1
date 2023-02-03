// 3. Given an array of strings, return an array containing only items with duplicates. For example, if you have an array with these items (a, b, c, b, f, g, a, d), your solution should give the output as (a, b).


function findDuplicates(arr) {

    let index = 0;
    let newArr = [];


    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                newArr[index] = arr[i];
                index++;
            }
        }
    }
    return newArr;
}

console.log(findDuplicates(["a", "b", "c", "b", "f", "g", "a", "d"]));