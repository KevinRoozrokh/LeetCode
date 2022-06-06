// Time complexity is O(N K log K) Where N is # of strings and K is length of strings
// Space complexity is O(N K) Data stired in our grouped Hash table


function groupAnagrams(strs) {
let grouped = {};

for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = word.split ('').sort().join('');

    if (!grouped[key]) {
        grouped[key] = []
    };

        grouped[key].push(word);
}

return Object.values(grouped);
}

module.exports = groupAnagrams;
