var cod

 

        //opções de estabelecimento 

        //o usuário irá escolher o estabelecimento de sua preferência 

        //o usuário irá informar o estabelecimento aqui: 

 

       cod = window.prompt ('\n1)Agência de viagem \n2)Artigos de decoração \n3)Artigos esportivos \n4)Praça de alimentação \n5)Cinema \n6)Cabelereiro, Clínicas de Estética e Podologia. \n7)Diversões (Parques/Videogames) \n8)Farmácia \n9)Ótica \n10)Joias e acessórios \n11)Lavanderia \n12)Lotérica \n13)Loja de departamento \n14)Moda e Vestuário \n15)Perfumaria e cosméticos \n16)Artigos Diversos \n\nInforme a categoria do estabelecimento desejado:'); 

 

        switch (cod) { 

 

//aqui mostrará as lojas que o usuário escolheu

            case "1": 

                window.alert("Estas são as lojas da categoria escolhida: CVC.") 

                break 

            case "2": 

                window.alert("Estas são as lojas da categoria escolhida: Imaginarium, Wall Street Posters.") 

                break 

            case "3": 

                window.alert("Estas são as lojas da categoria escolhida: Centauro.") 

                break 

            case "4": 

                window.alert("Estas são as lojas da categoria escolhida: Biffes Grill, Bocattino, Burger King, Cacau Show, Céu da Boca, Divino Fogão, McDonald's, Mini Kalzone, Sushiaki.") 

                break 

            case "5": 

                window.alert("Estas são as lojas da categoria escolhida: Cinesystem.") 

                break 

            case "6": 

                window.alert("Estas são as lojas da categoria escolhida: Botoclinic, Espaço Laser, Evolution Hair.") 

                break 

            case "7": 

                window.alert("Estas são as lojas da categoria escolhida: Winner Games.") 

                break 

            case "8": 

                window.alert("Estas são as lojas da categoria escolhida: Panvel.") 

                break 

            case "9": 

                window.alert("Estas são as lojas da categoria escolhida: Chilli Beans.") 

                break 

            case "10": 

                window.alert("Estas são as lojas da categoria escolhida: Brilho Especial, Revel Bijuterias.") 

                break 

            case "11": 

                window.alert("Estas são as lojas da categoria escolhida: Lavanderia Chuá.") 

                break 

            case "12": 

                window.alert("Estas são as lojas da categoria escolhida: Prêmio Certo.") 

                break 

            case "13": 

                window.alert("Estas são as lojas da categoria escolhida: Bourbon Hipermercado, Renner.") 

                break 

            case "14": 

                window.alert("Estas são as lojas da categoria escolhida: Camisaria Colombo, Gang, Lupo, YOUCOM.") 

                break 

            case "15": 

 

                window.alert("Estas são as lojas da categoria escolhida: O Boticário, Quem disse, Berenice?") 

                break 

            case "16": 

                window.alert("Estas são as lojas da categoria escolhida: Digimer, Gameline, Multisom, Samsung.") 

                break 

 

                

            default: 

                window.alert("Categoria Inválida!");

 

        }