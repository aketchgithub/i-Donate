// import LoginForm from './components.js/Login';
import './App.css';
import CharityList from './components.js/CharityList';
import SearchBar from './components.js/searchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
     <CharityList/>

      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
