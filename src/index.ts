import "./baseTypes/1";
import "./baseTypes/2";
import "./baseTypes/3";
import "./baseTypes/4";
import "./baseTypes/5";
import "./baseTypes/6";
import "./baseTypes/7";
import "./baseTypes/8";
import "./baseTypes/9";

type User = {
  name: string;
  surname: string;
  email: string ;
  password: string ;
};

const Bob: User = {
  name: 'Bob' ,
  surname: 'hans',
  email: 'sss@sss',
  password: 'nnnnn',
};

function createOrUpdateUser(initialValues: Partial<User>) {
  return {...initialValues}
  // Оновлення користувача
}

const newBob = createOrUpdateUser({

  email: "user@mail.com",
  password: "password123",
});

console.log(newBob);
export {};
