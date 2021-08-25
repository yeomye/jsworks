var customer = prompt("입장객은 몇 명인가요?");
var colNum = prompt("한 줄에 몇 명씩 앉나요?");
var rowNum;
if(customer%colNum === 0){  //나누어 떨어질때
    rowNum=customer/colNum} //줄 수
else{rowNum = parseInt(customer/ colNum + 1);}  //나누어 떨어지지 않을때
document.write(rowNum + "개의 줄이 필요합니다.");