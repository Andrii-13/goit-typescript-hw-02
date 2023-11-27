/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface T {}

class Component <T> {
  constructor (public props:T) {

  }
}

interface U extends T {
  title:string;
} 

class Page extends Component <U> {
  pageInfo (){
    console.log(this.props.title);
  }
}

export {};
