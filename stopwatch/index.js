const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const hrs = document.querySelector('.hrs');
const button = document.querySelector('.start');
const reset = document.querySelector('.reset-timer');
let m = 0;
let s = 0;
let h = 0;
console.log(m, s, h);
let id;
reset.addEventListener('click',()=>
{
    
     m = 0;
     s = 0;
     h = 0;
     hrs.innerHTML = 0;
     sec.innerHTML = 0;
     min.innerHTML = 0;
    if(button.classList.contains('started'))
    {
        button.classList.remove('started');
        button.innerHTML = 'Start';
        clearInterval(id);
    }

})
button.addEventListener('click', () => {
    if(button.classList.contains('started'))
    {
        button.classList.remove('started');
        button.innerHTML = 'Start';
        clearInterval(id);
    }
    else
    {
        button.classList.add('started');
        button.innerHTML = 'Stop';     
id = setInterval(() => {
    s++;
    if (s < 60) {
        sec.innerHTML = s;
    }
    else if (s === 60) {
        s = s / 60;
        m++
        if (m < 60) {
            min.innerHTML = m;
        }
        else if (m === 60) {
            m = m / 60;
            h++;
            hrs.innerHTML = h;
        }
    }
}, 1000);
    }
})