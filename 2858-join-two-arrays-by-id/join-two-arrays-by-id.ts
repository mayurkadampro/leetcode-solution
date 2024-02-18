type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            result[arr2[i].id] = { ...result[arr2[i].id], ...arr2[i] };
        } else {
            result[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(result);
};