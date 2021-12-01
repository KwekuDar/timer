const args = process.argv;
let newArray = args.splice(2);

let sortedList = newArray.sort((a,b) => a-b);
let numberList = sortedList.map(x => parseInt(x))

for (let i = 0; i < numberList.length; i ++) {
    if (Number.isInteger(numberList[i]) && parseInt(numberList[i]) >= 0 ) {
        setTimeout(() => {
            process.stdout.write('\x07');
        }, numberList[i] * 1000)
    } else{
        continue;
    }
};