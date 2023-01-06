  function toBinary() {
    let number =prompt("Nhập số cần chuyển đổi:");
    let result="";
    if (number==0){
        result="0";
    };
    while (number > 0) {
        result += number % 2;
        number = Math.floor(number/2);
    };

    alert(number+" to binary is "+ result)
}


