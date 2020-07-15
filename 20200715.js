// １問目
/*Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius.
    Unfortunately his code has some bugs.

    Find the errors in the code to get the celsius converter working properly.

    To convert fahrenheit to celsius:

    celsius = (fahrenheit - 32) * (5/9)
Remember that typically temperatures in the current weather conditions are given in whole numbers.
    It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth.
    Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.
*/
//バグのある回答
*/
function weatherInfo (temp) {
    var c : convert(temp)
    if (c > 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
    var celsius = (tempertur) - 32 + (5/9)
    return temperature
}


//修正
function weatherInfo(temp){
    let celsius = ( temp - 32) * (5/9)
    if( 0 < celsius ){
        return celsius + " is above freezing temperature"
    }else{
        return celsius + " is freezing temperature"
    }
}

// 2問目
/*
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

    Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

    Notes:

The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
    Pay attention to the data types.
    If the initial velocity is non-positive, the return value should be 0

*/
https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b
function sakuraFall(v) {
    // your code here
    if( 0 < v ){
        const s = 400 / v
        return s
    }else{
        return 0
    }
}

