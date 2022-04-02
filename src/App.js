import logo from './logo.svg';
import './App.css';
// import Functional from './components/Functional';
// import ClassBased from './components/ClassBased';
// import LifeCycle from './components/LifeCycle';
// import Parent from './components/Parent';
// import EventListener from './components/EventListener';
// import BasicJSX from './components/BasicJSX';
// import Listing from './components/Listing';
// import PracticeFunction from './components/PracticeFunction';
import TestParent from './components/Test1/TestParent';
import APIStarter from './components/APIStarter';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Functional/>
        <ClassBased/>
        <LifeCycle/> */}
        {/* <Parent/> */}
        {/* <EventListener></EventListener> */}
        {/* <BasicJSX/> */}
        {/* <PracticeFunction/> */}
        {/* <Listing/> */}
        {/* <TestParent/> */}
        {/* <APIStarter/> */}
        <Form/>
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
      </header>
    </div>
  );
}

export default App;
