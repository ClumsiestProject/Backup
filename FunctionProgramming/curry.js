function add( a, b, c, d ) {
    return a + b + c + d;
}

console.log( "输出add函数计算1+2+3+4的值 ： ", add( 1, 2, 3, 4) );

function curry( fn ) {
    var _arg = Array.prototype.slice.call( arguments, 1 );
    return function() {
        var newArgs = _arg.concat( [].slice.call( arguments ) );
        return fn.apply( this, newArgs );
    }
}

var add2 = curry( add, 4 );  
var res = add2( 1, 2, 3 );  

console.log( "输出经柯里化函数变换后计算1+2+3+4的值 ： ", res );