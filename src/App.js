import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181a1c';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (
   <>
  {/* <Router> */}
    <Navbar title="Text Editor" about="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
  {/* <Routes> */}
      {/* <Route path="/about" element = {<About />} /> */}
      {/* <Route path="/" element = { */}
      <TextForm showAlert={showAlert} heading="Enter your Text" mode={mode}/>
      {/* } /> */}
  {/* </Routes> */}
    </div>
  {/* </Router> */}
   </>
  )
}

export default App;
