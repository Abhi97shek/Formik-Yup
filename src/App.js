import './App.css';
import logo from "../src/asset/logo.png";
import Signup from './component/Signup';
function App() {
  return (
   <div className='container mt-5'>
     <div className='row'>
      <div className='col-md-5'>
          <Signup />
      </div>
      <div className='col-md-7'>
          <img className="img-fluid w-100" src={logo} />
      </div>
      </div>

   </div>
  );
}

export default App;
