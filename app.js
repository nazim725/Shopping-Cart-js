// function getTotal(inputId,totalId){
//     // const phoneInput=document.getElementById(inputId);
//     // const phoneInputvale=phoneInput.value;
//     // const phoneInputvaleInt=parseInt(phoneInputvale);
//     // const money=document.getElementById(totalId);
//     // const moneyValue=parseInt(money.innerText);
//     // const moneyTotal=moneyValue*phoneInputvaleInt
//     // money.innerText=moneyTotal;
// }

function getInputForPhone(inputId,isUpdate,totalId,price){
    const phoneInput=document.getElementById(inputId);
    let phoneInputvale=phoneInput.value;
    
    if(isUpdate==true){
        const number=parseInt(phoneInputvale)+1;
        phoneInputvale=number;
    }
    else if(isUpdate==false && phoneInputvale>0){
        const number=parseInt(phoneInputvale)-1;
        phoneInputvale=number;
     
    }
    phoneInput.value=phoneInputvale;
   
    const money=document.getElementById(totalId);
    const moneyValue=parseInt(money.innerText);
    const moneyTotal=price*phoneInputvale;
    money.innerText=moneyTotal;
    getTotal();
    

}
function getTotal(){
    const phoneInput=document.getElementById('phone-input');
    const phoneInputTotal=parseInt(phoneInput.value)*1219;
    const caseInput=document.getElementById('case-input');
    const caseInputTotal=parseInt(caseInput.value)*59;
    const subtotal=phoneInputTotal+caseInputTotal;
    const tax= subtotal/10;
    const total= subtotal+tax;

    const subtotalValue=document.getElementById('subtotal');
    const taxValue=document.getElementById('tax');
    const totalValue=document.getElementById('total');
    subtotalValue.innerText=subtotal;
    taxValue.innerText=tax;
    totalValue.innerText=total;


}

// function getTotal(){
//     const subtotal=parseInt(document.getElementById('subtotal').innerText);
//     const subtotalMoney=moneyTotal+subtotal;
//     console.log(subtotalMoney)
//     const sub=document.getElementById('subtotal');
//     sub.innerText=subtotalMoney;

    
// }

document.getElementById('phone-plus').addEventListener('click',function(){

    getInputForPhone('phone-input',true,'phone-total',1219);

   

});

document.getElementById('phone-minus').addEventListener('click',function(){
    getInputForPhone('phone-input',false,'phone-total',1219);
});
document.getElementById('case-plus').addEventListener('click',function(){
    getInputForPhone('case-input',true,'case-total',59);
});
document.getElementById('case-minus').addEventListener('click',function(){
    getInputForPhone('case-input',false,'case-total',59);
});

document.getElementById('check-out').addEventListener('click',function(){

    // document.getElementById('check-div').style.display='block'
    const phoneInput=document.getElementById('phone-input');
    const phoneInputTotal=parseInt(phoneInput.value)*1219;
    const caseInput=document.getElementById('case-input');
    const caseInputTotal=parseInt(caseInput.value)*59;
    const subtotal=phoneInputTotal+caseInputTotal;
    const tax= subtotal/10;
    const total= subtotal+tax;
    const checkText=document.getElementById('p');
    checkText.innerText=total;
   
    
   
    
});

