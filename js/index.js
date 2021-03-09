let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let ms = document.getElementById('message');

let b = document.getElementById('contact-form');



function formValidator(){
    
    let data = {};
    let error = [];
    
    if(fn.value) {
    data.fullname = fn.value;
    } else {
        error.push('full name is missing'); 
    }

    console.log(data, error);    

    if(em.value) {
        if (pattern.test(em.value)) {
        data.email = em.value;
        } else {
        error.push('Email is invalid. Try again.');
        }
        } else {
        error.push('Where is yor email?');
            }

            
        if(ms.value) {
        data.message = ms.value;
    } else {
        error.push('Message name is missing');
}
    
  
if (error.length === 0) { 

} else {

}
console.log(data, error);    
}
                        


b.addEventListener('click', formValidator);


