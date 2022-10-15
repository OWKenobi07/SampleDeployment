import './App.css';
import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes/';
import {withRouter} from 'react-router-dom';

function App() {
  return (
    <div>
    <NavigationBar/>
                <div className='py-5 z-0'>
                    <Routes />
                </div>
    </div>
  );
}

export default withRouter(App);
