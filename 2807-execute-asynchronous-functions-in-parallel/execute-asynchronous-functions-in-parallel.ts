type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    const functionsResults: T[] = [];
    return new Promise((resolve, reject) => {
        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((result) => {
                functionsResults[i] = result;

                if (functionsResults.filter(_ => _ !== null).length === functions.length) {
                    resolve(functionsResults);
                }
            }).catch(reject);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */