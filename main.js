//Bài 1:
document.getElementById("btnSubmit").onclick = function(){
    let sum = 0;
    let n = 0;
    
    while (sum < 10000){
        n++;
        sum += n;
    }
    document.getElementById("number").innerHTML = "Số nguyên dương nhỏ nhất là: " + n;
}

//Bài 2:
document.getElementById("btnTinhTong").onclick = function multiple(){
    let x = document.getElementById("numberX").value * 1;
    let n = document.getElementById("numberN").value * 1;
    let result = 0;
    for(let i = 1; i <= n; i++ ){
        result += Math.pow(x, i)     
    }
    document.getElementById("tinhTong").innerHTML = "Tổng: " + result;
}

//Bài 3:
document.getElementById("btnGiaiThua").onclick = function(){
    let m = document.getElementById("soBatKi").value * 1;
    let k = 1;

    for(let i = 1; i <= m; i++){
        k *= i;
    }
    document.getElementById("tinhGiaiThua").innerHTML = "Giai thừa: " + k;
}

//Bài 4:
document.getElementById("btnTaoThe").onclick = function(){
    let content = "";
    let theChan = "<div style = 'background-color: red; color: white; padding: 10px; border: 2px solid #000000'>" + "Thẻ chẵn" + "</div>";
    let theLe = "<div style = 'background-color: blue; color: white; padding: 10px; border: 2px solid #000000'>" + "Thẻ lẻ" + "</div>";
    for(let i = 1; i <= 10; i++){
        if(i % 2 === 0){
            content += theChan;
        }else{
            content += theLe;
        }
    }
    document.getElementById("taoThe").innerHTML = content;
}
