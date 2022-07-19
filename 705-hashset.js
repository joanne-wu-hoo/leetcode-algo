// https://leetcode.com/problems/design-hashset/

class MyHashSet {
    constructor(){
        this.obj = {};
    }
    
    add(key){
        this.obj[key] = true;
    }
    
    contains(key){
        return key in this.obj;
    }
    
    remove(key){
        if (key in this.obj) delete this.obj[key];
        return;
    }
}
