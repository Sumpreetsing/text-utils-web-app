
import './App.css';
// import About from './Components/About';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  //jsx:same as html but we are supposed to replace only some keywords
  return (
    <><Navbar title="Textutils" />
      <div className="container my-5">
        <Textform heading="Enter the text which you want to analyze :" />
        {/* <About /> */}
      </div>
    </>

  );
}

export default App;
