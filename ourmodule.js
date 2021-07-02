exports.ourFunction = function(){
    return 'welcome to atoss world!'
}

exports.ourSum = function(a,b){
    return a+b
}

exports.ourMul = function(a,b){
    return a*b
}

exports.ourDiv = function(a,b){
    if(b==0) return 'nu se imparte la 0'
    else return a/b
}

exports.ourSquare = function(a){
    return a*a
}