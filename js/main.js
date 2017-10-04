document.addEventListener('DOMContentLoaded', function(){


var sign = document.querySelector('.signin')
sign.addEventListener('click', function(){document.querySelector('.modal').style.display = "block";
});


var close = document.querySelector('.close')
close.addEventListener('click', function(){document.querySelector('.modal').style.display = '';
});

var field = document.querySelector('.submit')
field.addEventListener('click', function(){document.querySelector('#user').className = "error"

});

var field2 = document.querySelector('.submit')
field2.addEventListener('click', function(){document.querySelector('#pass').className = "error"
});


var removeError = document.querySelector('#user')
removeError.addEventListener('click', function(){document.querySelector('#user').className = ''});

var removeError2 = document.querySelector('#pass')
removeError2.addEventListener('click', function(){document.querySelector('#pass').className = ''});

var closemodal = document.querySelector('.getstarted')
closemodal.addEventListener('click', function() {document.querySelector('.getstarted').style.display = ''

});





});
