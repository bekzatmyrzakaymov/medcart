import appStyle from './App.module.css';
import Container from "./Container";
import {Provider} from 'react-redux'
import store from "./Store";

function App() {

    return (
        <div className={appStyle.app}>
            <Provider store={store}><Container/></Provider>
        </div>
    );
}

export default App;
