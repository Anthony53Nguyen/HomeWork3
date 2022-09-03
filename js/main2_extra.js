// Function to return true ì năm nhuận.
function leapYear(y) {
    return (y%4 == 0 && (y%100 != 0)) || (y%400 == 0) 
}


document.getElementById("go").onclick = function () {

let month = Number(document.getElementById("month").value);
let year = Number(document.getElementById("year").value);
var numDays = 0;
let res = "";

switch (month) {
    // tháng 31 day
    case 1:            
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        numDays = 31;
        break;
    // tháng 30 ngày
    case 4:                 
    case 6:
    case 9:
    case 11:
        numDays = 30;
        break;
    // tháng 2
    case 2:
            // if leap year
            if (leapYear(year)) {               
                numDays = 28;
            } else {
                numDays = 29;
            }
            break;
    }
res += "<p>" + month + "/" + year + " has " + numDays + " days.</p>";
document.getElementById("res").innerHTML = res;
}

