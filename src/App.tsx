import {Logo} from './components/Logo';
import {Footer} from './components/Footer';
import {Key} from './components/Key';
import {Main} from './components/Main/Main';
import styles from './App.module.css';
import {notes} from './domain/note';
console.log(notes);

function App() {
  return (
    <div className="App">
      <Logo />
      <main className={styles.content}>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
