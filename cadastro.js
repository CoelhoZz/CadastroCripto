var registro = [1];

var nome ;
var user ;
var pass ;
var email;

document.querySelector("form").addEventListener("submit", event => {

    event.preventDefault()
})

function limparReg(){
    registro.name = "";
    registro.usuario = "";
    registro.password = "";
    registro.email = "";

    document.getElementById('crip').innerText = "";
    document.getElementById('decrip').innerText = "";
    console.log('excluiu registro')
}

function validar(){
    nome = document.getElementById('nome');
    user = document.getElementById('user');
    pass = document.getElementById('pass');
    email = document.getElementById('email');

    if(nome.value == "" || user.value == "" || pass.value == "" || email.value == ""){
        return;
    }
    else{
        registro.name = nome
        registro.usuario = user
        registro.password = pass
        registro.email = email

        console.log('salvou registro')
    }  
}

function cripitografar(senha, chave){
    var saida="";
    var l;
    var i;
    var j=0;
    for (i=0;i<senha.length; i++){
        j++;
        l=(Asc(senha.substr(i,1))+(Asc(chave.substr(j,1))));
        if (j==50){
            j=1;
        }
        if (l>255){
            l-=256;
        }
        saida+=(Chr(l));
    }
    document.getElementById("crip").innerText = saida;
    console.log('chegou na crip')
}

function descriptografar(senhaCrip, chave){
    var saida="";
    var l;
    var i;
    var j=0;
    for (i=0; i<senhaCrip.length;i++){
        j++;
        l=(Asc(senhaCrip.substr(i,1))-(Asc(chave.substr(j,1))));
        if (j==50){
            j=1;
        }
        if (l<0){
            l+=256;
        }
        saida+=(Chr(l));
    }
    document.getElementById("decrip").innerText = saida;
    console.log('chegou na descrip')
}

function Asc(String){
	return String.charCodeAt(0);
}
 
function Chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}

function cripto(){
    var chaveCrip = document.getElementById('chave').value;
    cripitografar(pass.value, chaveCrip)
}

function decripto(){
    var senha = document.getElementById('crip').value;
    var chaveCrip = document.getElementById('chave').value;
    descriptografar(senha, chaveCrip)
}
