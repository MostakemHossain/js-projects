

function getPin(){
    const pin= generatePin();
    const pinString= pin+'';
    if(pinString.length===4){
        return pin;
    }else{
        return getPin();
    }

}

function generatePin(){
    const random= Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){

    const pin= getPin();

    const inputField= document.getElementById('display-pin');

    inputField.value= pin;
})



document.getElementById('calculator').addEventListener('click',function(event){
    const number= event.target.innerText; 
    const typeNumberField= document.getElementById('type-number-field');
    const previousNumberField= typeNumberField.value;

    if(isNaN(number)){

        if(number=='C'){
            typeNumberField.value= '';
        }else if(number=='<'){
            const digits= previousNumberField.split('');
            
            digits.pop();
            const remaining= digits.join('');
            typeNumberField.value= remaining;
            
        }

    }else{
        const newTypeNumber= previousNumberField+number;
        typeNumberField.value = newTypeNumber;
    }
})


document.getElementById('verify').addEventListener('click',function(){
    const displayPinField= document.getElementById('display-pin');
    const displayPin= displayPinField.value;
    //console.log(displayPin);

    const typePinField= document.getElementById('type-number-field');
    const typePin= typePinField.value;

    const pinSuccess= document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');



    if(displayPin==typePin){
        pinSuccess.style.display ='block';
        pinFailure.style.display='none';

    }else{
        pinFailure.style.display='block';
        pinSuccess.style.display ='none';

    }
})

const product = 5; const price = "7"; const subTotal = product * price; const tax = subTotal/10; const total = subTotal + tax; 

console.log(total);