const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const time = document.querySelector('#time');
const taskComplete = document.querySelector('#taskComplete');
const decrease = document.querySelector('#decrease');

submit.addEventListener('click', () =>{

    const avgTime = document.querySelector('#time').value;
    time.setAttribute('disabled', true);
    let task = 60 / avgTime;
    
    taskComplete.textContent = task; 
    decrease.addEventListener('click', () => {
        task -= 1;        
        taskComplete.textContent = task;  
    })
});

reset.addEventListener('click', () => {

    time.removeAttribute('disabled');
    taskComplete.textContent = '';  
});
