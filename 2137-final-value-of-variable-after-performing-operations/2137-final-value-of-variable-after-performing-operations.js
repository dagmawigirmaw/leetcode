/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let output = 0;
    for (let i = 0; i < operations.length; i++){
        if (operations[i] === "++X" || operations[i] === "X++")
            output++;
        else if (operations[i] === "--X" || operations[i] === "X--")
            output--;
    }

    return output;
    
};