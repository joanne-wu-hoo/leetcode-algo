// https://leetcode.com/problems/merge-intervals/

/*
1. sort intervals by the start time
2. initalize empty output array with first entry = first start time
3. compare the end of the first start time with the start of the second interval
   - if start >= end, then merge (left start, max(right end, left end)) and update output
   - if start !== end, then add interval to output
   
*/

var merge = function(intervals) {
    // sort by the start times  
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]); // intervals.sort((a,b) => a[0] < b[0] ? -1 : 1);
    
    const mergedIntervals = [sortedIntervals[0]];
        
    for (let [nextIntervalStart, nextIntervalEnd] of sortedIntervals){
        let [lastMergedIntervalStart, lastMergedIntervalEnd] = mergedIntervals[mergedIntervals.length-1];
        
        if (lastMergedIntervalEnd >= nextIntervalStart){
            mergedIntervals[mergedIntervals.length-1] = [lastMergedIntervalStart, Math.max(nextIntervalEnd, lastMergedIntervalEnd)];
        } else {
            mergedIntervals.push([nextIntervalStart, nextIntervalEnd]);
        }  
        
    }
    
    return mergedIntervals;
};
