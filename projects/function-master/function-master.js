function objectValues(obj){
    var myArr = [];
    for(var key in obj){
        myArr.push(obj[key]);
    } return myArr;
}

function keysToString(obj){
    var myStr = "";
    for(var key in obj){
        myStr += key + " ";
    } return myStr.trim();
}

function valuesToString(obj){
    var myStr = "";
    for(var key in obj){
        if(typeof obj[key] === 'string'){
           myStr += obj[key] + " " 
        }
    } return myStr.trim();
}

function arrayOrObject(arg){
    if(Array.isArray(arg)){
        return 'array';
    }
    return 'object';
}

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

function capitalizeAllWords(words){
    var myArr = words.split(" ");
    var finishedString = "";
    for(var i = 0; i < myArr.length; i++){
        finishedString += myArr[i][0].toUpperCase() + myArr[i].slice(1) + " ";
    } return finishedString.trim();
}

function welcomeMessage(obj){
    if(!obj.name){
        console.log("name not found!");
    }
    return "Welcome " + obj.name[0].toUpperCase() + obj.name.slice(1) + "!";
}

function profileInfo(obj){
    if(!obj.name || !obj.species){
        console.log("This object is not valid!");
    }
    return obj.name[0].toUpperCase() + obj.name.slice(1) + " is a " + obj.species[0].toUpperCase() + obj.species.slice(1);
}

function maybeNoises(obj){
    if(!obj.noises || obj.noises[0] === undefined){
        return 'there are no noises'
    }
    return obj.noises.join(" ");
}

function hasWord(string, word){
    if(string.indexOf(word) === -1){
        return false;
    }
    return true;
}

function addFriend(name, obj){
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj){
if(obj.friends !== undefined ){
for(var i = 0; i < obj.friends.length; i++){
    if(obj.friends[i] === name){
        return true;
    }
}
} return false;
}

function nonFriends(name, people){
    var allNonFriends = [];
    people.forEach(pushNonFriends);
    return allNonFriends;
    

    function pushNonFriends(element, index){
        if(element.name === name) {
            
        } else if(!element.friends.some(isFriendCheck)){
                allNonFriends.push(element.name);
        }
    }
        
    function isFriendCheck(friend, index){
    	return name === friend;
    }
}

function updateObject(obj, key, value){
         obj[key] = value;
         return obj;
} 

function removeProperties(obj, stringsArr){
    for(var i = 0; i < stringsArr.length; i++){
        if(obj.hasOwnProperty(stringsArr[i])){ // if check actualy not necessarry for this to work
            delete obj[stringsArr[i]];
        }
    }
}

function dedup(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === i){
            newArr.push(arr[i]);
        }
    }return newArr;
}