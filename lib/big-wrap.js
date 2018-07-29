'use strict';

module.exports = (a) => {
    check(a);
    
    let next = 0;
    let i = a.length;
    
    const result = [];
    
    do {
        const digit = a[i - 1] + next;
        const mod = digit % 10;
        
        result.unshift(mod);
        next = Math.floor(digit / 10);
    } while (--i);
    
    if (next)
        result.unshift(next);
    
    return result;
}

function check(a) {
    if (!Array.isArray(a))
        throw Error('a should be an array!');
}

