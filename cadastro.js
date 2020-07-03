var login, senha, cod 

var cadastro, csenha, estabelecimento, resumo, link, categoria, foto, andar 

  

//aqui o dono do estabelecimento tem a escolha de entrar no site, cadastrar ou trocar de senha se não lembrar  

cod = window.prompt('1) Entrar \n2) Cadastrar \n3) Recuperar Senha \n\nEscolha uma opção: ') 

  

  

//visualizar estabelecimento com o login 

  if (cod == 1) { 

    login = window.prompt('E-mail: ') 

    senha = window.prompt('Senha: ') 

   

  //se for compatível o sistema aceita 

  if (login == 'teste@teste.com' && senha == 'senha123') 

    window.alert("Login efetuado com sucesso!") 

   

    

  else { 

         

      window.alert("E-mail ou senha inválido.") 

  

    } //fecha else 

    } //fecha if cod 1 

  

//cadastrar estabelecimento no site 

  if (cod == 2) { 

    cadastro = window.prompt('Informe seu e-mail: ') 

    csenha = window.prompt('Informe sua senha: ') 

    estabelecimento = window.prompt('Informe o nome do estabelecimento: ') 

    resumo = window.prompt('Faça um breve resumo sobre o estabelecimento: ') 

    link = window.prompt('Insira aqui o link do estabelecimento: ') 

    categoria = window.prompt('Informe a categoria do estabelecimento: ') 

    foto = window.prompt('Opcional: se desejar informe uma foto do estabelecimento: ') 

    andar = window.prompt('Informe o andar do estabelecimento: ') 

  

  } //fecha if cod 2 

  

//possibilita o dono do estabelecimento recuperar a senha 

  else if (cod == 3) { 

    cadastro = window.prompt('Nova senha: ') 

    cadastro = window.prompt('Repetir senha: ') 

    cadastro = window.prompt('Informe seu e-mail: ') 

  } 

  else if (cod != 1 || cod != 2 || cod != 3) { 

  window.alert("Opção Inválida.") 

  } 
