import { Route, Routes } from 'react-router-dom'
import './App.css'
import TodosPage from './component/TodosPage'
import UserPage from './component/UserPage'
import NavBar from './component/NavBar'
import EventExample from './component/EventExample'
import UserItemPage from './component/UserItemPage'
import TodosItemPage from './component/TodosItemPage'
function App() {


  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/todos' Component={TodosPage}/>
            <Route path='/users' Component={UserPage}/>
            <Route path='/users/:id' Component={UserItemPage}/>
            <Route path='/todos/:id' Component={TodosItemPage}/>
            <Route path='/drag' Component={EventExample}/>
        </Routes>
    </div>
  )
}

export default App

