//variable

const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {

     accordion[i].addEventListener('click', function (){

       for (let j = 0; j < accordion.length; j++) {
            if(j !== i){
               accordion[j].classList.remove('active')
            }
        
       }
          this.classList.toggle('active');
     })
  
}