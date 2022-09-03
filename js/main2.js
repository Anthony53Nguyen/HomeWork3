// 1.  Input:  
// User input ví trí của mình trong gia đình as letter
// B (ba), M (mẹ), A (anh trai), và E (em gái).
// 2.  Xử lý:
// toUpperCase input đề phòng trường hơp input chữ thường
// Sử dụng if else if, tùy theo letter input mà gán vị trí tương
// ứng trong gía đình cho biến res (resut).
// 3.  Output:
// Xuất ra "Hello " + res


document.getElementById("go").onclick = function () {

    var person = document.getElementById("person").value.toUpperCase();
    var res = "<p>Hello, "

    if (person == "B") {
        res += "Father";
    } else if (person == "M") {
        res += "Mother";
    } else if (person == "A") {
        res += "Brother";
    } else if (person == "E") {
        res += "Sister";
    } else {
        res += "wrong input";
    }
    res += " </p>"

    document.getElementById("res").innerHTML = res;

}

