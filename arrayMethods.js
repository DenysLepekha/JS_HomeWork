Array.prototype.forEach2 = function(callback) {
    if (callback !== 'function') 
    throw TypeError('Callback should be a function');

    for(let i = 0; i < this.length; i++) {
        callback(this[i], i , this);
    }
};

Array.prototype.map2 = function(callback) {
    if (callback !== 'function') 
    throw TypeError('Callback should be a function');

    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i , this));
    }
    return arr;
};

Array.prototype.filter2 = function(callback) {
    if (callback !== 'function') 
    throw TypeError('Callback should be a function');

    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i , this));
    }
    return arr;
};

Array.prototype.reduce2 = function(callback, initialVal) {
    if (callback !== 'function') 
    throw TypeError('Callback should be a function');

    var accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

Array.prototype.every2 = function(callback, context) {
    if (callback !== 'function') 
    throw TypeError('Callback should be a function');

    for (var i = 0; i < this.length; i++) {
        if (!callback.call(context, this[i], i, this))
            return false;
    }
    return true;
};

Array.prototype.some2 = function(callback, context) {

    if (callback !== 'function') 
    throw console.log(TypeError('Callback should be a function'));
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            return true;
    }
    return false;
};
