function read(num) {
    var out = ""
    // read out a number
    switch (num) {
        case 1:
            out = "một";
            break;
        case 2:
            out = "hai";
            break;
        case 3:
            out = "ba";
            break;
        case 4:
            out = "bốn";
            break;
        case 5:
            out = "năm";
            break;
        case 6:
            out = "sáu";
            break;
        case 7:
            out = "bảy";
            break;
        case 8:
            out = "tám";
            break;
        case 9:
            out = "chín";
            break;
        case 0:
            out = "không";
    }
    return out;
}

document.getElementById("read").onclick = function () {

var num = Number(document.getElementById("num").value);
// Take out số hàng trăm, hàng chục, và hàng đơn vị
var tram = Math.floor(num/100);
var chuc = Math.floor(num%100/10);
var donvi = num%10;
var res = ""
// các trường hợp khác nhau khi đọc số tiếng việt
// 805 tám trăm lẽ năm..815 tám trăm mười lăm..
// 112 một trăm mười hai...
if (tram != 0) {
    res += read(tram) + " trăm ";
    if ((chuc == 0) && (donvi==0)) {
        res += "";
    }else if ((chuc == 0) && (donvi != 0)) {
        res += " lẽ " + read(donvi);
    }else if ((chuc == 1) && (donvi == 0)) {
        res += " mười";
    }else if ((chuc == 1) && (donvi == 5)) {
        res += " mười lăm";    
    }else if ((chuc == 1)){
        res += " mười " + read(donvi);
    }else if (donvi == 5) {
        res += read(chuc) + " mươi lăm" 
    }else {
        res += read(chuc) + " mươi " + read(donvi)
    }
} else {
    if (chuc == 0) {
        res += read(donvi)
    } else if (chuc==1){
        res += "mười "
        if (donvi == 5) {
            res += "lăm"
        } else if (donvi == 0){
            res += ""
        }
        else {
            res += read(donvi)
        }  
    } else {
        res += read(chuc) + " mươi "
        if (donvi == 0) {
            res += ""
        } else if (donvi == 5) {
            res += "lăm"
        } else {
            res += read(donvi)
        }
    }
}

// Capitalize the first letter
var final = "</p>" + res.charAt(0).toUpperCase() + res.slice(1) +"</p>";
document.getElementById("res").innerHTML = final;
}

