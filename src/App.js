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
import {Checkout} from "./component/Checkout";


function App() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actions.songActions.fetchData())
    },[])

    return (
        <div className="App">
            <header>
                <h1>Movie Library</h1>
                <NavBar/>
            </header>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/library" element={<Shop/>}/>
                <Route path="/library/:name" element={<Music/>}/>
                <Route path="/" element={<Navigate to="/home" />}/>
            </Routes>
        </div>
    );
}

export default App;
