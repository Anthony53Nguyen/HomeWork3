// 1.  Input:  
// Nhập vô 3 số nguyên a, b, c từ user.
// 2.  Xử lý: 
// So sánh a và b, nếu a>b, hoán chuyển a=b và b=a (sử dụng biến trung gian temp).
// So sánh c và b, nếu b>c, hoán chuyển b=c và c=b.
// So sánh again a và b, nếu a>b, hoán chuyển a=b và b=a
// 3.  Output:
// Díplay a, b, c.  Kết quả là chuỏi có thứ tự tăng dần.


document.getElementById("sort").onclick = function () {

    var a = document.getElementById("num1").value*1;
    var b = document.getElementById("num2").value*1;
    var c = document.getElementById("num3").value*1;
    console.log(a, b, c);
    
    var temp = 0;  
    if (a > b) {
        temp = a;
        a = b;
        b = temp; 
    }
    console.log(a, b, c);
    if (b > c) {
        temp = b;
        b = c;
        c = temp; 
    }
    console.log(a, b, c);
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    console.log(a, b, c);


    var res = "<p>The numbers in increasing order:  " + a + " " + b + " " + c + " </p>"

    document.getElementById("res").innerHTML = res;

}

