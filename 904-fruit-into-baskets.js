// https://leetcode.com/problems/fruit-into-baskets/

var totalFruit = (fruits) => {
    let left = 0;
    let right = 0;
    let maxFruits = 0;
    let fruitCounts = {}; // not including right
    
    while (right < fruits.length){
        fruitCounts[fruits[right]] = (fruitCounts[fruits[right]] || 0) + 1;
 
        while (Object.keys(fruitCounts).length > 2){
            fruitCounts[fruits[left]]--;
            if (fruitCounts[fruits[left]] === 0) delete fruitCounts[fruits[left]]
            left++;
        }
        
        maxFruits = Math.max(maxFruits, right-left+1); 
        right++;
    }
    
    return maxFruits;
}

/*
sliding window
while keeping a frequency counter

while the number of fruits is <= 2, keep expanding

when number of fruits > 2, minimize
*/
