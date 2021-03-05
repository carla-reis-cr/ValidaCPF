
function ValidaCPF(regra){
    if(regra==1){
        var vCPF = document.getElementById('cpf').value;
    }else{
        var vCPF = document.getElementById('cpf2').value;
    }
    

    //var vetorCPF=new Array(5, 2, 9, 9, 8, 2, 2, 4, 7, 2, 5);
    var vetorCPF=new Array();
    vetorCPF = vCPF.split('');
    //vetorCPF = vCPF.split("");
    //console.log(vetorCPF);
    //console.log(vetorCPF.length);
    var total=0;
    var multiplicaCPF = 10;

    if(regra==1){
        for(var cont = 0; cont < vetorCPF.length; cont++){
            if(multiplicaCPF>=2){
                var v = vetorCPF[cont];
                total = total + (v * multiplicaCPF);
                multiplicaCPF--;
            } 
         } 
    }else{
        var multiplicaCPF = 11;
        for(var cont = 0; cont < vetorCPF.length; cont++){
            if(multiplicaCPF>=2){
                var v = vetorCPF[cont];
                total = total + (v * multiplicaCPF);
                multiplicaCPF--;
            } 
         } 
    }
        
    var resto = (total*10)% 11;
    var Valida;

    if(regra==1){
        if(vetorCPF[9]==resto){
            var msg =  "CPF Valido";
            document.getElementById('returnCPF').value = msg;
        }else{
            var msg =  "CPF Invalido";
            document.getElementById('returnCPF').value = msg;
        }
    }else{
        if(vetorCPF[10]==resto){
            var msg =  "CPF Valido";
            document.getElementById('returnCPF2').value = msg;
        }else{
            var msg =  "CPF Invalido";
            document.getElementById('returnCPF2').value = msg;
        }
    }
    



    
  // document.getElementById('returnCPF').value = msg;


}

