console.log('clicked index.js')

const getValue =(id)=>{
     const value = parseInt(document.getElementById(id).value)
     return value
}

document.getElementById('loginBtn').addEventListener('click',function(e){
    e.preventDefault()
    const number =123
    const pin = 111

    const mobileNumber =getValue('number');
    const pinNumber = getValue('pin')
console.log(number,pin,mobileNumber)
        if(mobileNumber == number && pinNumber == pin){
            window.location.href ="home.html"
        }else{
        const errorMessage = document.getElementById('error');
   
        errorMessage.innerText = 'Please give valid input';
    
        setTimeout(() => {
             errorMessage.innerText = '';
        }, 1000);
    }
})