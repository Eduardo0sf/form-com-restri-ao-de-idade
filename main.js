const nameUser = document.querySelector('#userName')
const ageUser =document.querySelector('#age')
const danger = document.querySelector('#aviso')
const button = document.querySelector('#btn')


//verificar os campos de informação
function Veryficated() {

    if(ageUser.value === "", nameUser.value === "") {

        document.body.classList.add('active')
        danger.innerHTML =" <h2>Prencha os campos.</h2>" + " <p>Para fazer o acesso.</p>" + " <p>clique no aviso, para fechar.</p>"
        button.innerHTML = 'Verificar'
        return
    }
    if(ageUser.value < 18) {
        document.body.classList.add('active')

        danger.innerHTML = "<h2>menores de 18 anos são proibidos.</h2>" + " <p>peça para seus pais acessarem para você.</p>" + " <p>clique no aviso, para fechar. </p>"
        button.innerHTML = 'Verificar'
        
    return
    }

    if(ageUser.value > 120) {
        document.body.classList.add('active')

        danger.innerHTML = "<h2>maiores de 120 anos são proibidos.</h2>"
        button.innerHTML = 'Verificar'
    return
    }


        button.innerHTML = '<a href="./final.html">Entrar</a>'


    
}
//fechar aviso
function closeDanger() {
    
    document.body.classList.remove('active')
    
}


