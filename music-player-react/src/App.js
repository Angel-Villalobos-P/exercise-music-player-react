import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlayControl } from './components/PlayControl';

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <PlayControl />
            </div>
        </div>
    );
}

export default App;
