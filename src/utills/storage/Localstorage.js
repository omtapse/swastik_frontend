function getValuefromLocalStorage (key) {
    if (typeof window !== 'undefined') {
        // console.log("here",localStorage.getItem(key),key)
        return localStorage.getItem(key);
    }
}

function setValuefromLocalStorage (key, data) {
    if (typeof window !== 'undefined') {
    return localStorage.setItem(key, data);
    }
}

function removeValueFromLocalStorage(key) {
    if (typeof window !== 'undefined') {
    return localStorage.removeItem(key);
    }
}

export default {
    clear:function(){
        localStorage.clear();
    },
    JWT_TOKEN : {
        key : "JWT_TOKEN" ,
        get:function(){
            return getValuefromLocalStorage(this.key);
        },
        set : function(data){
            return setValuefromLocalStorage(this.key , data);
        },
        remove : function(){
            return removeValueFromLocalStorage(this.key);
        }
    },
    USER_ID : {
        key : "USER_ID" ,
        get:function(){
            return getValuefromLocalStorage(this.key);
        },
        set : function(data){
            return setValuefromLocalStorage(this.key , data);
        },
        remove : function(){
            return removeValueFromLocalStorage(this.key);
        }
    },
    ROLE:{
        key : "ROLE" ,
        get:function(){
            return getValuefromLocalStorage(this.key);
        },
        set : function(data){
            return setValuefromLocalStorage(this.key , data);
        },
        remove : function(){
            return removeValueFromLocalStorage(this.key);
        }
    },
}