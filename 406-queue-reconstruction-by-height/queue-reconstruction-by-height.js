/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = people => {
    const res = []
    // sort by height desc, k asc
    const sortedPeople = people.sort(([h1, k1], [h2, k2]) => h1 === h2 ? k1 - k2 : h2 - h1)

    for (const [height, k] of sortedPeople) {
        res.splice(k, 0, [height, k])
    }

    return res
}