import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <Banner>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button>Lorem Ipsum</button>
        </Banner>
      </main>
      <Footer nomeDaEmpresa="Lorem Ipsum" />
    </>
  );
}

export default App;
