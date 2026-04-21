
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Nav from './components/Nav'
import './App.css'
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>

    )
}

export default App;