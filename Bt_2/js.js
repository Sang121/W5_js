function sameArray(){
    let arr1=[]
    let arr2=[]
    let n=prompt("nhập số phần tử của mảng 1: ")
    for (let i=0;i<n;i++){
        a = prompt("Nhập phần tử thứ " + (i+1)  +" của mảng 1:")
        arr1.push(a)
    }
    arr1.sort((a, b) => a - b);
    

    let m=prompt("nhập số phần tử của mảng 2: ")
    for (let i=0;i<m;i++){
        b = prompt("Nhập phần tử thứ " +  (i+1) +" của mảng 2:")
        arr2.push(b)
    }

arr2.sort((a, b) => a - b);
alert("Mảng thứ 1 của bạn là "+arr1)
alert("Mảng thứ 2 của bạn là "+arr2)
let check;
if((arr1[0]>arr2[0]) && (arr1[n-1]<arr2[m-1])){
    check=true;
}
else{
    check=false
}
alert(check)


        
}