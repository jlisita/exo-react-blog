import './App.css';
import Header from './Header';
import ListArticles from './ListArticles';
import Footer from './Footer';

const App = () => {
  return (
    <div className = ".App">
      <Header/>
      <ListArticles/>
      <Footer/>
    </div>
  );
};

export default App;
