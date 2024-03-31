/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const combinations = [];
    // Here we know we can only start with an opening bracket => use 1 open:
    // but we can also start with an empty string and 0 like so:
    buildCombinationFrom('(', 1, 0, n, combinations);
    return combinations;
};

var buildCombinationFrom = (currStr, openUsed, closeUsed, n, combinations) => {
    // Base case: when we reach 2n length
    if (currStr.length === 2 * n) {
        // Add the string to the list of combination:
        combinations.push(currStr);
        // Exit from this recursive call.
        return;
    }

    // Case: when we can add more opening bracket:
    // If we haven't used all opening bracket (n pairs = n opens)
    if (openUsed < n) {
        // Add 1 opening, update opening used:
        buildCombinationFrom(currStr + '(', openUsed + 1, closeUsed, n, combinations);
    }
    // Case: when we can add more closing bracket:
    // If we have more opening than closing:
    if (openUsed > closeUsed) {
        // Add 1 closing, update closing used:
        buildCombinationFrom(currStr + ')', openUsed, closeUsed + 1, n, combinations);
    }
}