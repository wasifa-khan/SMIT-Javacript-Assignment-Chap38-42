let year = +prompt("Enter a year");
function leap(){
    if(year % 4 ===0 ){
        if(year % 100 && year % 400)
        document.write(year + " is a leap year")
    }
    else{
        document.write( year + " is not a leap year")
    }
}
leap();