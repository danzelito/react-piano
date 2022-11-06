import {Logo} from './components/Logo';
import {Footer} from './components/Footer';
import styles from './App.module.css';

import {notes} from './domain/note';
console.log(notes);

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
