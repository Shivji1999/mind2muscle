
import './App.css';
import Footer from './components/common/FooterComponent.jsx';
// import AuthComponent from './components/auth/AuthComponent';
import Header from './components/common/HeaderComponent.jsx'
import SearchComponent from './components/home/SearchComponent.jsx';

function App() {
  return (
    <div className="App">
      
      {/* <AuthComponent/> */}
      <Header />
      <SearchComponent />
      <Footer />
    </div>
  );
}

export default App;
