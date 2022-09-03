document.getElementById("go").onclick = function () {
// Get tọa độ của trường học và nhà student.
var school = document.getElementById("school").value.split(',');
var stu1 = document.getElementById("stu1").value.split(',');
var stu2 = document.getElementById("stu2").value.split(',');
var stu3 = document.getElementById("stu3").value.split(',');

// Calculate dist từ nhà sv đến trường, làm tròn 2 số lẽ.
var dist1 = Math.sqrt((school[0]*1-stu1[0]*1)*(school[0]*1-stu1[0]*1) + (school[1]*1-stu1[1]*1)*(school[1]*1-stu1[1]*1)).toFixed(2)

var dist2 = Math.sqrt((school[0]*1-stu2[0]*1)*(school[0]*1-stu2[0]*1) + (school[1]*1-stu2[1]*1)*(school[1]*1-stu2[1]*1)).toFixed(2)

var dist3 = Math.sqrt((school[0]*1-stu3[0]*1)*(school[0]*1-stu3[0]*1) + (school[1]*1-stu3[1]*1)*(school[1]*1-stu3[1]*1)).toFixed(2)

console.log(dist1, dist2, dist3)

var res = "";
// So sánh tìm đoạn đường dài nhất.
if(dist1 >= dist2 && dist1 >= dist3) {
    res += "Stu1. <br>Distance: " + dist1 
    console.log(dist1)
} else if(dist3 >= dist1 && dist3 >= dist2) {
    res += "Stu3. <br>Distance: " + dist3 
    console.log(dist3)
} else {
    res += "Stu2. <br>Distance: " + dist2 
    console.log(dist2, dist3)
}
// } else if(dist3 >= dist1 && dist3 >= dist2) {
//     res += "Stu3. <br>Distance: " + dist3 
//     console.log(dist3)
// } 

document.getElementById("res").innerHTML = res;
}

