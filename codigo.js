const form = document.getElementById('formulario')

function trueoufalse(A,B){
    return A<B;
}

form.addEventListener('submit', function(e){
    let formValida = false;
    e.preventDefault();
    
    const A = parseInt(document.getElementById('numberA').value)
    const B = parseInt(document.getElementById('numberB').value)
    
    formValida = trueoufalse(A,B)
    
    if (formValida){
        alert('é valido!');
    }else{
        alert('não é valido!');
    }
}
)

