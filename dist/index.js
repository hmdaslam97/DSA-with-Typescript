"use strict";
function letterCombinations(digits) {
    const hash = { 2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    if (digits.length === 0) {
        return [];
    }
    if (digits.length === 1) {
        console.log(hash[digits]);
    }
    if (digits.length > 1) {
        console.log(hash[digits]);
    }
    return [];
}
;
console.log(letterCombinations("2")); //["a","b","c"]
//console.log(letterCombinations("23")) //["ad","ae","af","bd","be","bf","cd","ce","cf"]
