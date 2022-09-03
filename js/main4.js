// 1.  Input:
// User input 3 cạnh của tam giác.
// 2.  Xử lý
// Check if tam giác is valid ỏ not (chiều dài 1 cạnh ko dài hơn
// tổng 2 cạnh còn lại) --- > add kq vô biến res nếu tam giác là
// invalid.
// Nếu tam giác valid, sử dụng if xét các cạnh thỏa mản định lý 
// pytagore cho tam giác vuông -----> add kq vô biến res.
// Sau đó sử dụng if else if, xét các trường hợp cho tam giác đếu 
// nếu 3 cạnh bằng nhau, tam giác cân nếu có 2 cạnh bất kỳ bằng
// nhau, hoặc chỉ là tam giác thường ------> add kết quả vô biến
// res.
// Bằng cách sử dụng 2 mệnh đề if riêng biệt ta đã xét luôn trường 
// hợp tam giác vuông cân.
// 3.  Output:
// Xuất output res to html.

document.getElementById("go").onclick = function () {

    var side1 = document.getElementById("side1").value*1
    var side2 = document.getElementById("side2").value*1
    var side3 = document.getElementById("side3").value*1
    
    var res = "The triangle is "
    if((side1 >= side2 + side3)||(side2 >= side1 + side3)||(side3 >= side1 + side2)) {
        res += "invalid"
    } else {
        if((side1*side1 == side2*side2 + side3*side3) ||
       (side2*side2 == side1*side1 + side3*side3) ||
       (side3*side3 == side2*side2 + side1*side1)) {
            res += "vuông "
       }

        if ((side1 == side2) && (side2 == side3)) {
            res += "đều "
        } else if ((side1 == side2)||(side2 == side3)||(side1 == side3)){
            res += "cân "
        } else {
            res += "thường "
        }
    }
    res += " </p>"
    document.getElementById("res").innerHTML = res;
}

