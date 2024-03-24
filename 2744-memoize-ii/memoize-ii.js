/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const globalCache = new Map();

    return function (...args) {
        let currentCache = globalCache;
        for (const arg of args) {
            if (!currentCache.has(arg)) currentCache.set(arg, new Map());
            currentCache = currentCache.get(arg);
        }

        // Use a special key to store the result at the last level
        const resultKey = "__CACHE__";
        if (!currentCache.has(resultKey)) currentCache.set(resultKey, fn(...args));
        return currentCache.get(resultKey);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */