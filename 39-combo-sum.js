// https://leetcode.com/problems/combination-sum/

/*
for each number
subtract the number from the target

base cases
- if the remainder = 0, we've found a valid combo of numbers, return that number and concat it to the combos
- if the remainer < 0, we have an invalid combo

progress
- for each of the candidates, subtract the number from the remainder
*/

var combinationSum = function(candidates, target) {
    const result = [];
    dfs(candidates, target, [], result)
    return result;
}

const dfs = (candidates, target, path, result) => {
    if (target === 0) result.push(path);
    if (target < 0) return null;
    
    for (let i = 0; i < candidates.length; i++){
        dfs(candidates.slice(i), target-candidates[i], path.concat(candidates[i]), result);
    }
}
