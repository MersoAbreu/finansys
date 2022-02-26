import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDatabase implements InMemoryDbService{

createDb(){
  const categories =[
    {id:1, name:"Lazer",descripton:", Porções, Shopping"},
    {id:2, name:"Construção",descripton:"Materiais de construção"},
    {id:3, name:"Investimento",descripton:"Poupança, CDB"},
    {id:4, name:"Pagamentos",descripton:"Funcionários, despexas auxiliares"},
    {id:5, name:"Escola",descripton:"Materiais, mensalidades"},
    {id:6, name:"Agua, Luz e alimentação",descripton:"Agua, Luz, compras e etc..."},
  ];

  return categories;
}

}
