const pipe = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new Error('pipe only accepts a function');
    }
    return x => fns.reduce((v, fn) => fn(v), x);
};

try {
    const f3 = pipe(inc, 7, cube); 
} catch (e) {
    console.error(e.message); 
}