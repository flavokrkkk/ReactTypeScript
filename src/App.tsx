import './App.css'
import Card from './component/Card'
import { CardVariant } from './component/Card'
import UserList from './component/UserList'
import { IUser } from './types/types'
// import { IUser } from './types/types';
function App() {

  const users: IUser[] = [
    {id: 1, name: 'Egor', email: 'egor@gmail.com', address: {city: 'Kostroma', street: 'Lenina', zipcode: '123451'}},
    {id: 2, name: 'Andry', email: 'spider_man@gmail.com', address: {city: 'Kostroma', street: 'Pushkina', zipcode: '123451'}}
  ]

  return (
    <div>
      <Card
        variant={CardVariant.primary}
        width='200px'
        height='200px'
      >
        <button>Click</button>
        <div>sdsd</div>
      </Card>
      <UserList
        users={users}
      />
    </div>
  )
}

export default App
