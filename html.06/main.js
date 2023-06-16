const form = document.getElementById ('form-AB');


form.addEventListener('submit' , function(e){
    e.preventDefault();

const A = parseInt(document.getElementById('a').value );
const B = parseInt(document.getElementById('b').value) ;
const mensagemsucesso = "Acesso Permitido!" ;
const mensagemerro = "Acesso Negado!" ;


if(B > A){
    alert(mensagemsucesso)
    
    a.value = ' ';
    b.value = ' ';

}else {
    alert(mensagemerro)
}
})
console.log(form)