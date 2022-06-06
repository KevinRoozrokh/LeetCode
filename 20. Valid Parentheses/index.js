// Time complexity is O(n) - iterate through input string just once.
// Space complexity is O(n) - in worst case stack is same length as input string.

function isValid(s) {
    let stack = [];
    let pairsHashMap = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (pairsHashMap[char]) {
            stack.push(char)
        } else {
          const topOfStack = stack[stack.length - 1];
          char === pairsHashMap[topOfStack] ? stack.pop() : stack.push(char)
        }
    }


    return stack.length === 0;
}

module.exports = isValid;
