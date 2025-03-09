document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector('input');
    let emailerror = document.getElementById('p');
    let emailerrors = document.getElementById('img');
    let emailinput = email.value.trim();
    let emailbtn = document.querySelector('button')
    let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailpattern.test(emailinput)){
        emailerror.style.display = 'none'
        emailerrors.style.display = 'none'
        window.location.href = 'style.css'
    }
    else{
        emailerror.style.display = 'block';
        emailerrors.style.display = 'block';
        emailbtn.style.top = '-78px'
        email.style.borderColor  = 'hsl(0, 93%, 68%)';
    }
});
