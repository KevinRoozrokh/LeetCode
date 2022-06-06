// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1. 

// 3 nested for loops brute force
// Best Approach - Sliding Window approach O(n)

function lengthOfLongestSubstring(s) {
    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i];

    if (windowCharsMap[endChar] >= windowStart) {
        windowStart = windowCharsMap[endChar] + 1;
    } 
    windowCharsMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
}
return maxLength;
}

module.exports = lengthOfLongestSubstring;


