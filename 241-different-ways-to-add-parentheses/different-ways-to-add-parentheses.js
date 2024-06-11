/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    // Helper function to calculate the result of two numbers using an operator
    const calculate = (num1, num2, operator) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
        }
    }

    // If the expression doesn't contain any operators, return the expression as an integer
    if (!expression.includes('+') && !expression.includes('-') && !expression.includes('*')) {
        return [parseInt(expression)];
    }

    // Initialize an empty array to store the results
    const result = [];

    // Iterate through the expression
    for (let i = 0; i < expression.length; i++) {
        const curr = expression[i];

        // If the current character is an operator (+, -, or *), split the expression into left and right parts
        if (curr === '+' || curr === '-' || curr === '*') {
            const leftPart = expression.substring(0, i);
            const rightPart = expression.substring(i + 1);

            // Recursively calculate results for the left and right parts
            const leftResult = diffWaysToCompute(leftPart);
            const rightResult = diffWaysToCompute(rightPart);

            // Combine the results using the current operator and add them to the result array
            for (const left of leftResult) {
                for (const right of rightResult) {
                    result.push(calculate(left, right, curr));
                }
            }
        }
    }

    return result;
};