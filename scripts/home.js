console.log('home page is licked')

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
const transactionBtn = clickBtn('transaction','transaction-form')