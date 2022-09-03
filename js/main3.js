// 1.  Input:
// User input 3 số nguyên.
// 2.  Xử lý:
// Số number lẽ là tổng của num1%2 + num2%2 + num3%2
// Số number chẵn là (3 - số number lẽ)
// 3.  Output:
// Xuất số number chẵn và số number lẽ.

document.getElementById("go").onclick = function () {

    var num1 = document.getElementById("num1").value*1
    var num2 = document.getElementById("num2").value*1
    var num3 = document.getElementById("num3").value*1
    
    var odd = num1%2 + num2%2  + num3%2;

    var res = "<p>Number of evens: " + (3-odd) + " </p>";
    res += "<p>Number of odds: " + odd + " </p>";

    document.getElementById("res").innerHTML = res;

}

