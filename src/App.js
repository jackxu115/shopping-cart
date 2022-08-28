import {NavBar} from "./component/NavBar";
import {Navigate, Route, Routes} from "react-router-dom";
import "./App.scss";
import {Home} from "./component/Home";
import {Shop} from "./component/Shop";
import {Music} from "./component/Music";
import {useDispatch} from "react-redux"
import {useEffect} from "react";
import actions from "./actions";
import {Cart} from "./component/Cart";


function App() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actions.songActions.fetchData())
    },[])

    return (
        <div className="App">
            <header>
                <h1>Shopping Cart</h1>
                <NavBar/>
            </header>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop/:name" element={<Music/>}/>
                <Route path="/" element={<Navigate to="/home" />}/>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
