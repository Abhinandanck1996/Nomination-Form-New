import logo from './logo.svg';
import './App.css';

import "./components/global.css";
import SpotifyLogin from './Spotify Component/SpotifyLogin';
import EmployeeForm from './Employee/EmployeeForm';
import Promismethod from './Employee/Promismethod';
import Pagination from './Employee/Pagination';




function App() {
  return (
    <div className="App">
      {/* <Pagination/> */}
      {/* <SpotifyLogin/> */}
      <EmployeeForm/>
    </div>
  );
}

export default App;


