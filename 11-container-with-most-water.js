// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length-1 

    while (left < right) {
        const curHeight = Math.min(height[left], height[right])
        const curWidth = right - left
        const area = curHeight * curWidth
        maxArea = Math.max(maxArea, area)

        height[right] <= height[left] ? right-- : left++
    }

    return maxArea
};

/*
we can calculate the area as width * height where
width = R - L
height = min(L,R)

--

max area = 0
start with L = 0
R = length-1 // THIS IS THE KEY: starting left and right as far away as possible (not L=0, R=1)

-- 

for each iteration
- calculate area and update max area
- we can either try to maximize width OR height
  always move the pointer pointing to the SHORTER line INWARD

*/
