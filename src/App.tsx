import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AppRouter } from './routes/AppRouter'
import NavBar from './component/NavBar'
function App() {

  
  return (
    <>
      <NavBar/>
      <Routes>
        {AppRouter.map(({path, Component}) => 
            <Route path={path} Component={Component}/>
          )}
      </Routes>
    </>
  )
}

export default App
