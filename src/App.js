import './App.css';
import MovieList from './components/movieList';
import Header from './components/header';

function App() {
  return (
    <div className='app'>
      <Header />
        <div>
          <MovieList />
        </div>
    </div>
  );
}

export default App;

