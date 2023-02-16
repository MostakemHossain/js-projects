//first card
let serial=0;
document.getElementById('first-card').addEventListener('click',function(){
    serial+=1;
    const productName= document.getElementById('product-name1').innerText;
   const productPrice=document.getElementById('product-price1').innerText;
   const productQuantity= document.getElementById('product-quantity1').innerText;
   const productTotal = parseInt(productPrice)* parseInt(productQuantity);

    displayTable(serial,productName,productPrice,productQuantity,productTotal);

  
})
document.getElementById('last-card').addEventListener('click',function(){
    serial+=1;
    const productName= document.getElementById('product-name5').innerText;
   const productPrice=document.getElementById('product-price5').value;
   const productQuantity= document.getElementById('product-quantity5').value;
   const productTotal = parseInt(productPrice)* parseInt(productQuantity);

    displayTable(serial,productName,productPrice,productQuantity,productTotal);

  
})



document.getElementById('third-card').addEventListener('click',function(){
    serial+=1;
    const productName= document.getElementById('product-name3').innerText;
   const productPrice=document.getElementById('product-price3').innerText;
   const productQuantity= document.getElementById('product-quantity3').innerText;
   const productTotal = parseInt(productPrice)* parseInt(productQuantity);

    displayTable(serial,productName,productPrice,productQuantity,productTotal);

  
})
document.getElementById('forth-card').addEventListener('click',function(){
    serial+=1;
    const productName= document.getElementById('product-name4').innerText;
   const productPrice=document.getElementById('producy-price4').innerText;
   const productQuantity= document.getElementById('product-quantity4').innerText;
   const productTotal = parseInt(productPrice)* parseInt(productQuantity);

    displayTable(serial,productName,productPrice,productQuantity,productTotal);

  
})


function displayTable(serial,productName,productPrice,productQuantity,productTotal){
    const container= document.getElementById('table-container');

    const tr= document.createElement("tr");
    tr.innerHTML = `
     <td>${serial}</td>
     <td>${productName}</td>
     <td>${productPrice}</td>
     <td>${productQuantity}</td>
     <td>${productTotal}</td>
 
    `
    container.appendChild(tr);
}


document.getElementById('second-card').addEventListener('click',function(event){

    serial+=1;

    //console.log(event.target.parentNode.parentNode.children[0].innerText);
    const productName=event.target.parentNode.parentNode.children[0].innerText;
    const productPrice=event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity=event.target.parentNode.parentNode.children[3].children[0].innerText;


    const productTotal = parseInt(productPrice)* parseInt(productQuantity);
    console.log(productTotal);

    displayTable(serial,productName,productPrice,productQuantity,productTotal);
})




