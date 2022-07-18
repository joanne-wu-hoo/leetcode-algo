// https://leetcode.com/problems/subsets/

var subsets = function(nums) {
    const output = [];
    dfs([], 0, nums, output)
    return output;
}

const dfs = (combo, idx, numsToAdd, output) => {
    output.push(combo);
    
    for (let i = idx; i < numsToAdd.length; i++){
        dfs(combo.concat(numsToAdd[i]), idx+=1, numsToAdd, output);
    }
}
