// Return true if năm nhuận, false if not.

function leapYear(y) {
    return (y%4 == 0 && (y%100 != 0)) || (y%400 == 0) 
}

// Tìm ngày mai.  Có kiểm tra tính hợp lệ của ngày input. 
// Có kiểm tra năm nhuận.

document.getElementById("tomorrow").onclick = function () {
// Get ngày tháng năm hiện tại
let date = document.getElementById("date").value;
let day = Number(date.substr(0, 2));
let month = Number(date.substr(3, 2));
let year = Number(date.substr(6));

// Biến chứa ngày tháng năm tomorrow.
let next_day = 0;
let next_month = 0;
let next_year = 0;
let res = "";

switch (month) {
    // tháng có 31 days
    case 1:            
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
        if (day >= 1 && day <= 30) {
            next_day = day + 1;
            next_month = month;
            next_year = year;
    // if day là ngày cuối tháng
        } else if (day == 31){     
            next_day = 1;
            next_month = month + 1;
            next_year = year;
        } else {
            res = "Invalid day"
        }
        break;
    // tháng có 30 days
    case 4:                  
    case 6:
    case 9:
    case 11:
        if (day >= 1 && day <= 29) {
            next_day = day + 1;
            next_month = month;
            next_year = year;
    // if day là ngày cuối tháng
        } else if (day == 30){        
            next_day = 1;
            next_month = month + 1;
            next_year = year;
        } else {
            res = "Invalid day"
        }
        break;
    // if tháng là tháng 2
    case 2:  
            // check năm nhuận       
            if (leapYear(year)) {               
                if (day >= 1 && day <= 27) {
                    next_day = day + 1;
                    next_month = month;
                    next_year = year;
            //  ngày cuối cùng tháng 2 năm nhuận
                } else if (day == 28){    
                    next_day = 1;
                    next_month = month + 1;
                    next_year = year;
                } else {
                    res = "Invalid day.  LEAP YEAR !!!"
                }
            } else {
                if (day >= 1 && day <= 28) {
                    next_day = day + 1;
                    next_month = month;
                    next_year = year;
            // ngày cuối cùng tháng 2, ko phải năm nhuận
                } else if (day == 29){   
                    next_day = 1;
                    next_month = month + 1;
                    next_year = year;
                } else {
                    res = "Invalid day"
                }
            }
            break;
    // tháng 12
    case 12:                            
        if (day >= 1 && day <= 30) {
            next_day = day + 1;
            next_month = month;
            next_year = year;
    // ngày cuối năm
        } else if (day == 31){
            next_day = 1;
            next_month = 1;
            next_year = year + 1;
        } else {
            res = "Invalid day"
        }
        break;
    default:
        res = "Invalid month";
}
res += "<p>Tomorrow date is " + next_day + "/" + next_month + "/" + next_year + " </p>";
document.getElementById("res").innerHTML = res;
}

// Tìm ngày hôm qua.  Assume ngày input hợp lệ
// Có kiểm tra năm nhuận.
document.getElementById("yesterday").onclick = function () {

    let date = document.getElementById("date").value;
    let day = Number(date.substr(0, 2));
    let month = Number(date.substr(3, 2));
    let year = Number(date.substr(6));
    
    // Biến chứa ngày hôm qua
    let last_day = 0;
    let last_month = 0;
    let last_year = 0;
    let res = "";
    
    // Xét tháng trước đó
    switch (month - 1) {
        // trường hợp 31 days
        case 1:            
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            // Nếu ko phải là ngày đầu tháng
            if (day != 1) {
                next_day = day-1;
                next_month = month;
                next_year = year;
            // Nếu là ngày đầu tháng
            } else if (day == 1){
                last_day = 31;
                last_month = month - 1;
                last_year = year;
            }
            break;
        // trường hợp 30 days        
        case 4:                 
        case 6:
        case 9:
        case 11:
            if (day != 1) {
                next_day = day-1;
                next_month = month;
                next_year = year;
            } else if (day == 1){
                last_day = 31;
                last_month = month - 1;
                last_year = year;
            }
            break;
        // tháng 2
        case 2:                       
                if (day != 1) {
                    last_day = day-1;
                    last_month = month;
                    last_year = year;
                // trường hợp day là ngày 1/3 
                } else if (day == 1){                 
                    last_month = month - 1;
                    last_year = year;
                    // check năm nhuận
                    if (leapYear(year)) {
                        last_day = 28;
                    } else {
                        last_day = 29
                    }
                            
                }
                break;
        // trường hợp tháng hiện tai là tháng giêng (month-1) = 0.
        case 0:                            
        if (day != 1) {
            next_day = day-1;
            next_month = month;
            next_year = year;
        // trường hơp ngày hiên tại là 1/1
        } else if (day == 1){
            last_day = 31;
            last_month = 12;
            last_year = year -1;  
        }
        break;
        default:
            res = "Invalid month";
    }
    res += "<p>Yesterday date was " + last_day + "/" + last_month + "/" + last_year + " </p>";
    document.getElementById("res").innerHTML = res;
    
    }