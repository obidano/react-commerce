import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import CardListComponent from "./components/card-list/card-list.component";

function App() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            const $data = res.data
            console.log($data)
            setData($data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <div className="App">

            <CardListComponent data={data}/>
        </div>
    );
}

export default App;
