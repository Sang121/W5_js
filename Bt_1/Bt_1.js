function toBinary() {
    let number =prompt("Nhập số cần chuyển đổi:");
    a=number;
    number=parseInt(number,16)
    let result="";
         while (number > 0) {
            let remainder = number % 2;
            result = remainder + result ;
            number = Math.floor(number / 2);
            }

           alert(a+" chuyển sang nhị phân là "+result);
}
    