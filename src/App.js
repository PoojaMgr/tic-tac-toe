import './App.css';
import Header from './molecule/Header';
import MainContent from './molecule/MainContent';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main-container">
        <MainContent />
      </main>
    </>
  );
}

export default App;
