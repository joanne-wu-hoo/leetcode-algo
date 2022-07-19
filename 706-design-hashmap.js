// https://leetcode.com/problems/design-hashmap/

class MyHashMap {
    constructor(){
        this.arr = new Array();
    }
    
    put(key,value){
         this.arr[key] = value;
    }
    
    get(key,value){
        return this.arr[key] === undefined ? -1 : this.arr[key];
    }
    
    remove(key,value){
        this.arr[key] = undefined;    
    }
}

// bucket class: https://leetcode.com/problems/design-hashmap/discuss/1037862/JavaScript-MyHashMap-with-Bucket-Class
// https://levelup.gitconnected.com/leetcode-706-design-hashmap-march-leetcoding-challenge-2021-fdae1a4adbc
