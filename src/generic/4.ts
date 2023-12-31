/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/


class Component <T> {
  constructor (public props:T) {

  }
}

interface PropsTitle  {
  title:string;
} 

class Page extends Component <PropsTitle> {
  pageInfo (){
    console.log(this.props.title);
  }
}

export {};
