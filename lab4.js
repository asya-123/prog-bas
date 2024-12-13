const sum1 = (...args) => {
    let result = 0;
    const numArr = [...args];
    for(let step = 0; step < numArr.length; step++) {
        result += numArr[step];
    }
    return result;
};


const sum2 = (...args) => {
    let result = 0;
    for(num of args) result += num;
    return result;
};


const sum3 = (...args) => {
    let result = 0;
    let step = 0;
    while(step < args.length){
        result += args[step];
        step++;
    };
    return result;
};


const sum4 = (...args) => {
    let result = 0;
    if(args.length === 0) return 0;
    do {
        result += args.pop();
    } while(args.length > 0);
    return result;
};

const sum5 = (...args) => {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0 ) 
};
