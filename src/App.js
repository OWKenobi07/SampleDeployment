import './App.css';
import NavigationBar from './components/NavigationBar';
import {withRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <h1>With Router</h1>
    </div>
  );
}

export default withRouter(App);
