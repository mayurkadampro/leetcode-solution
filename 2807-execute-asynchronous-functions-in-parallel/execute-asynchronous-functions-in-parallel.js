/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const resultsArray = new Array(functions.length);
        let count = 0
        functions.forEach((fn, i) => {
            fn().then(val => {
                resultsArray[i] = val;
                count++;
                if (count === functions.length) resolve(resultsArray);
            }).catch(reason => reject(reason));
        });
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */