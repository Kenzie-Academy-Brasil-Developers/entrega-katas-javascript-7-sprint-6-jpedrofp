// 1.
// DONE
function somaUm(value) { return (value + 1) }

function newForEach(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

// console.log(newForEach([2, 4, 6], somaUm))


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// 2.
// NOT DONE
function newFill(array, value, starter, final) {
    // starter and final are optional
    if (starter === undefined) starter = 0
    if (final === undefined) final = array.length

    let filledArray = []

    for (i = starter; i < array.length; i++) {
        
        if (array[i]==final){
            let diff = (array.length - filledArray.length);
            for (i = 0; i < diff; i++) 
            filledArray.push(array[filledArray.length])
           break
        }
        filledArray.push(value);
    }


    return filledArray
}

// console.log(newFill([4, 1, 2], 4, 0, 2))



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 3.
// DONE

function éMuitoBom(val) {
    return `${val} é muito bom`
}

function newMap(val, callback) {
    let arr = []
    let values = val.toString().split(",");
    for (let i = 0; i < values.length; i++) {
        arr.push(callback(values[i]))
    }
    return arr.join(", ")
}

// console.log(newMap(["maçã", "uva", "pera"],éMuitoBom ))



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 4.
// DONE
function isBiggerThan10(val) {
    if (val > 10) { return true }
    return false
}

function newSome(array, callback) {
    for (i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) { return true }
    }
    return false
}

// console.log(newSome([5,6,11],isBiggerThan10))


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 5. 
// DONE
function newFind(array, callback) {
    for (i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) { return array[i] }
    }
    return result
}

// console.log(newFind([5,11,6],isBiggerThan10))


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 6.
// DONE
function newFindIndex(array, callback) {
    let result = [];
    for (i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) { result.push(i) }
    }
    return result
}

// console.log(newFindIndex([5, 11, 6], isBiggerThan10))

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 7.
// DONE
function newEvery(array, callback) {
    let arr = array.toString().split(",");
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) { result.push(arr[i]) }
    }
    let res = result.join(",")
    if (res == array) { return true }
    return false
}

// console.log(newEvery([11, 11, 13], isBiggerThan10))


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 8.
// DONE
function newFilter(array, callback) {

    let result = [];
    for (i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) { result.push(array[i]) }
    }
    return result
}
// console.log(newFilter([9, 11, 13], isBiggerThan10))

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 9.
// DONE
function newConcat(array1, array2) {

    let res = [];
    for (i = 0; i < array1.length; i++) {
        res.push(array1[i])
    }
    for (i = 0; i < array2.length; i++) {
        res.push(array2[i])
    }
    return res.join(",")
}

// console.log(newConcat([1,2,3], [4,5,6]))

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 10.
//DONE
function newIncludes(array, odd) {
    for (i = 0; i < array.length; i++) {
        if ((array[i]) == odd) { return true }
    }
    return false
}

// console.log(newIncludes([1,2,4], [3]))

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 11.



function newIndexOf(array, toFind) {
    for (i = 0; i < array.length; i++) {
        if ((array[i]) == toFind) { return i }
    }
    return -1
}

// console.log(newIndexOf([1, 2, 2, 3, 5, 3], [3]))


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 12.

function newJoin(array) {
    let str = array.toString().split("")
    let result = ""
    for (i = 0; i < str.length; i++) {
        result += str[i]
    }
    return result
}

const elements = ['Fire', 'Air', 'Water'];
// console.log(newJoin(elements));

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 13.

function newReduce(accumulator, currentValue) {
    let sum = 0
    for (i = 0; i < accumulator.length; i++) {
    sum+=accumulator[i]
    }

    return (sum+currentValue)
}
const array1 = [1, 2, 3, 4];
// console.log(newReduce(array1, 5));



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// EXTRAS
// 14.

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// 15.

function callbacknewFlat(val) { }
function newFlat(array, callback) {
    return callback(array)
}


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// 16.



function callbacknewFlatMap(val) { }
function newFlatMap(array, callback) {
    return callback(array)
}


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

