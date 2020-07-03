var totalcompra, total, opcao
var opcao = prompt("Informe Código de indentificação:  \n 1)Cliente Comun \n 2)Funcionário \n 3)Vip \n\n");
var total = prompt("Informe valor da compra: ");


switch (opcao) {
    case "1":
        alert("Não recebe desconto. Total da comopra é de:" + total);
        break;
    case "2":
    	  totalcompra= total - (total  * 0.15)
        alert("Desconto de 15%. Total: "+total+" \n Total com desconto: "+totalcompra);
        break;
    case "3":
    	  totalcompra= total - (total * 0.10)
        alert("Desconto de 15%. Total: "+total+" \n Total com desconto: "+totalcompra);
        break;
    default:
        console.log("Opção inválida");
}
