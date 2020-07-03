var media, soma;
    var idade, sexo, cont, contman, contwoman;
    
    media = 0;
    soma = 0;
    
    // counter
    cont = 0;
    contman = 0;
    contwoman = 0;
    
    //inform your age
    window.alert("Informe a sua idade: ");
    idade = window.prompt('Enter a value for idade');
    
    //condition start
   do {
   //insert your gender
        window.alert("Digite '0' para masculino ou '1' para feminino : ");
        sexo = window.prompt('Enter a value for sexo');
  
        soma = soma + idade;
        
        // counter
        cont = cont + 1;
        
        //condition if code 1 is female it will be entered at the age of 35 - 40
        if (sexo == 1 && idade >= 30 && idade <= 45) {
            // counter
            contwoman = contwoman + 1;
        } else {
            if (sexo == 0) {
                // counter
                contman = contman + 1;
            } else {
            //insert your gender
                window.alert("Digite '0' para masculino ou '1' para feminino:");
            }
        }
        
        //inform your age
        window.alert("Informe a sua idade: ");
        idade = window.prompt('Enter a value for idade');
    }
    
    //if you enter 0, finish!!!
     while (idade > 0) {
    media = soma / cont;
    window.alert("A média total de idade entre ambos os sexos é: " + media);
    window.alert("O total de mulheres entre 30 a 45 anos é: " + contwoman);
    window.alert("O total de homens é: " + contman);
    }
