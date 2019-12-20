$("#nav_toggle").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});

// Form sender

document.querySelector('.form-group button[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.form-group input[name=name]').value,
            email: document.querySelector('.form-group input[name=email]').value,
            phone: document.querySelector('.form-group input[name=phone]').value,
        })
    })
    .then(_ => document.querySelector('.form-group').reset());
}



