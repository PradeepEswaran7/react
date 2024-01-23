import logo from './logo.svg';
import './App.css';
import FunctionComp from './Components/FunctionComp';
import ClassComp from './Components/ClassComp';
import PradeepComp from './Components/PradeepComp';
import MyStateComp from './Components/MyStateComp';
import MyEventComp from './Components/MyEventComp';
import MyImagesComp from './Components/MyImagesComp';
import MyCssComp from './Components/MyCssComp';
import ParentComp from './Components/ParentComp';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1 className='text-primary bg-info'>Welcome</h1>
      {/* <FunctionComp myName="Pradeep Eswaran" post="Java Developer"></FunctionComp>
      <ClassComp myName="Eswaran Sengodan" post="Full Stack Developer"></ClassComp> */}
      {/* <PradeepComp name="Pradeep Eswaran" post="Full Stack Developer" salary="40000" contact="99999999" gender="M" address="Sankari"></PradeepComp> */}
      {/* <MyStateComp></MyStateComp> */}
      {/* <MyEventComp></MyEventComp> */}
      {/* <MyImagesComp></MyImagesComp> */}
      {/* <MyCssComp></MyCssComp> */}
      {/* <ParentComp></ParentComp> */}
      <ClickCounter/>
      {/* <HoverCounter/> */}
    </div>
  );
}

export default App;
