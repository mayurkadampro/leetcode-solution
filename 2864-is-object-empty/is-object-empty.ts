type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    // 1st solution
    // for (const _ in obj) return false;
    // return true;

    // 2nd solution
    // if (Object.keys(obj).length > 0) {
    //     return false
    // }
    // return true;

    // 3rd alternative way of writing
    return Object.keys(obj).length == 0;
};