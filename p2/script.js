const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value) 
    const results=document.querySelector('#results')

     if(height===''||height<=0||isNaN(height))
     {
        results.textContent='please enter valid height';

     }
     if(weight===''||weight<=0||isNaN(weight))
     {
        results.textContent='please enter valid';
     }
     else 
     {
        const bmi=(weight/(height*height)).toFixed(2);
        results.textContent='youe BMI is '+bmi;

     }
     results.style.display='block';
     form.reset();

})