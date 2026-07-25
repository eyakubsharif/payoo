console.log('home page is licked')

const transactionData = []

const clickBtn =(id1,id2)=>{
    document.getElementById(id1).addEventListener('click',function(){
   const forms =document.getElementsByClassName('form');
   for(let form of forms){
    form.style.display ='none'
   }
   document.getElementById(id2).style.display = 'block'
})
}
const addmoneyBtn = clickBtn('addmoney','addmoney-form')
const cashoutBtn = clickBtn('cashout','cashout-form')
const transferBtn = clickBtn('transfer','transfer-form')
const bonusBtn = clickBtn('bonus','bonus-form')
const paybillBtn = clickBtn('paybill','paybill-form')


const getValue =(id)=>{
    const inputValue = document.getElementById(id).value
    const value =parseFloat(inputValue)
    return value
}

document.getElementById('addMoneyBtn').addEventListener('click',function(e){
    e.preventDefault()
   const mainBalance =parseInt(document.getElementById('main-balance').innerText )
   const bank = document.getElementById('bank').value
   const account = getValue('number')
    const pin = getValue('pin')
    const amount = getValue('amount')
const data = {
        name:'Add Money',
        amount:amount,
         img:'./assets/addmoney.png',
        date:new Date().toLocaleTimeString()
}

transactionData.push(data)

if(account === '' || isNaN(amount) || amount <= 0 || pin === ''){     
        const errorMessage = document.getElementById('error');
         errorMessage.innerText = 'Please give valid input' 
        errorMessage.style.color ='red'
    setTimeout(() => {
        errorMessage.innerText = '';
    }, 3000);

     return 
       
    }

    const errorMessage = document.getElementById('error').innerText = ''

    const totalBalance = mainBalance + amount
    document.getElementById('main-balance').innerText =totalBalance

})

document.getElementById('cashout-btn').addEventListener('click',function(e){
    e.preventDefault()
   const mainBalance =parseInt(document.getElementById('main-balance').innerText )
   const bank = document.getElementById('bank').value
   const account = getValue('number')
    const cashoutPin = getValue('cashout-pin')
    const cashoutAmount = getValue('cashout-amount')

const data = {
        name:'Cashout',
        amount:cashoutAmount,
         img:'./assets/cashout.png',
        date:new Date().toLocaleTimeString()
}

transactionData.push(data)

if(isNaN(cashoutAmount) || cashoutAmount <= 0 || cashoutPin === ''){
    const errorMessage = document.getElementById('cashoutError')
        errorMessage.innerText = 'Please give valid input'; 
        errorMessage.style.color = 'red';
        
        setTimeout(() => {
            errorMessage.innerText = '';
        }, 3000);

        return; // এই return-টি নিচের কোডগুলোকে আর রান করতে দেবে না
    }

    const totalBalance = mainBalance - cashoutAmount
    console.log(totalBalance)
    document.getElementById('main-balance').innerText =totalBalance
    
    
})

document.getElementById('transfer-btn').addEventListener('click', function(e) { 
    e.preventDefault(); 
   
    const transferAmount = getValue('transferAmount'); 
    const transferPin = String(getValue('transferPin')).trim()
    const mainBalance = parseInt(document.getElementById('main-balance').innerText); 

    const data = {
        name:'Transfer',
        amount:transferAmount,
        img:'./assets/transfer.png',
        date:new Date().toLocaleTimeString()
}

transactionData.push(data)
    
    if (isNaN(transferAmount) || transferAmount <= 0 || transferPin.length === 0) { 
        const transferError = document.getElementById('transferError'); 
        transferError.innerText = 'Please give valid input'; 
        
        setTimeout(() => { 
            transferError.innerText = ''; 
        }, 1000); 
        return; 
    } 

    const netAmount = mainBalance - transferAmount; 
    document.getElementById('main-balance').innerText = netAmount; 
});

document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href = 'index.html'
})


document.getElementById('transaction').addEventListener('click',function(){
     const forms =document.getElementsByClassName('form');
   for(let form of forms){
    form.style.display ='none'
   }
   document.getElementById('transaction-form').style.display = 'block'

   const container = document.getElementById('container');
   
   for(let data of transactionData){
    const div = document.createElement('div');
   div.innerHTML =`
    <div class="flex items-center justify-between px-5 py-5 shadow-md rounded-xl bg-white mb-3">
        <div class="flex gap-5 items-center">
            <div class ="bg-gray-100 rounded-full p-2">
                 <img class="w-10" src="${data.img}" alt="">
            </div>
        <div>
            <p class="font-bold text-sm">Add Money</p>
            <p class="text-sm">Amount : 2000</p>
            <p class="text-xs">10:12 AM</p>
        </div>
       
    </div>
     <i class="fa-solid fa-ellipsis rotate-90"></i>

    </div>

   
   `
   container.appendChild(div)
   }

 


})