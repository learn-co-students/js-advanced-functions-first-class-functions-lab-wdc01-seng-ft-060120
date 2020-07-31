const returnFirstTwoDrivers = (array) => {
    let new_arr = [];
    for(let i=0;i<2;i++){
        new_arr.push(array[i])
    }
    return new_arr;
}

const returnLastTwoDrivers = (array) => {
    let new_arr = [];
    for(let i=array.length-2;i<array.length;i++){
        new_arr.push(array[i])
    }
    return new_arr;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return (fare) => {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers) {
    return selectingDrivers(arrayOfDrivers);
}