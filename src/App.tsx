import {Logo} from './components/Logo';
import {Footer} from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <main className={styles.content}></main>
      <Footer />
    </div>
  );
}

export default App;
