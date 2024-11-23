import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';

function App(){
  return (
    <main className='app container-fluid'>
      <div style={{ position: "absolute", left: "0", top: "0" }}>
        <Header />
      </div>

      <section id="about" style={{ minHeight: "100vh"}} className='mt-5'>
        <About />
      </section>

    </main>
  );
}

export default App;
