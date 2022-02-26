import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Categories} from './pages/categories/shared/categories.model';

export class InMemoryDatabase implements InMemoryDbService{

createDb(){
  const categories: Categories[]= [
    {id:1, name:"Lazer",description:", Porções, Shopping"},
    {id:2, name:"Construção",description:"Materiais de construção"},
    {id:3, name:"Investimento",description:"Poupança, CDB"},
    {id:4, name:"Pagamentos",description:"Funcionários, despexas auxiliares"},
    {id:5, name:"Escola",description:"Materiais, mensalidades"},
    {id:6, name:"Agua, Luz e alimentação",description:"Agua, Luz, compras e etc..."},
  ];

  return categories;
}

}
