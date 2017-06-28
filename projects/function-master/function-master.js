function objectValues (data){
    var dataArray = [];
     for(var key in data){
         dataArray.push(data[key]);
     }
    return dataArray;
}

function keysToString(data) {
    var key = Object.keys(data);
    var newString = key.join(" ");
    return newString;
}

function valuesToString(data) {
    var dataArray = [];
     for(var key in data){
         if (typeof data[key] === "string") {
         dataArray.push(data[key]);
         }
     }    
   var newString = dataArray.join(' ');
   return newString;
}

function arrayOrObject(data) {
   var isArray = Array.isArray(data);
   if (isArray) {
       return "array";
   } else if  (!isArray && typeof data === "object") {
       return "object";
   }
}

function capitalizeWord(data) {
    return data.charAt(0).toUpperCase() + data.substring(1);
}

function capitalizeAllWords(data) {
    var dataArray = data.split(' ');
    var capitalizedArray =[];
    for (var i = 0; i < dataArray.length; i++) {
        capitalizedArray[i] = dataArray[i].charAt(0).toUpperCase() + dataArray[i].substring(1);
    }
    return capitalizedArray.join(' ');
}

function welcomeMessage(data) {
    return 'Welcome ' + data.name.charAt(0).toUpperCase() + data.name.substring(1) +'!';
}

function profileInfo(data) {
    return data.name.charAt(0).toUpperCase() + data.name.substring(1) + ' is a ' + 
    data.species.charAt(0).toUpperCase() + data.species.substring(1);
}

function maybeNoises(data) {
    if (Array.isArray(data.noises) && data.noises.length > 0) {
        return data.noises.join(' ');
    } else {
        return "there are no noises";
    }
}

function hasWord(string, word) {
    return string.includes(word);
}

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

function isFriend(name, object) {
    if (object.friends) {
    var friendString = object.friends.join(" ");
    return (friendString.includes(name));
    } else {
        return false;
    }
}

/*function nonFriends(name, data) {
    var array = [];
    for (var i = 0; i < data.length; i++){
        if (data[i].friends && data[i].friends.includes[name] && !data[i].name.includes[name]) {
         array.push(data[i][name]);
     }
     }
    return array;  
}*/
function nonFriends(name, data){
    var array = [];
    for (var i = 0; i < data.length; i++){
        if (data[i]['name'] !== name && data[i]['friends'] && (!(data[i]['friends'].includes(name)))){
        array.push(data[i]['name']);
     }
     }
    return array;
}

function updateObject(object, key, value) {
        object[key] = value;
        return object;
}

/*function removeProperties(object, properties) {
    var property = '';
    for (var i = 0; i < properties.length; i++) {
        property = properties[i];
        if (object.hasOwnProperty(property)) {
         delete object[properties];
        }
    } return object; 
}*/

function removeProperties(object, properties){
    for (var i = 0; i < properties.length; i++){
        for (var key in object){
            if (properties[i] === key){
                delete object[key];
            }
        }
    } return object;
}

function dedup(data){
    var newArray = [];
    for (var i = 0; i < data.length; i++){
        if (!(newArray.includes(data[i]))){
        newArray.push(data[i]);
        }
    }
    return newArray;
}