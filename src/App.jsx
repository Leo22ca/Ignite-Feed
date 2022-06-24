import { Header } from "./components/Header";
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Leonardo Hornig"
            content="Teste de conteúdo para post"
          />
          <Post
            author="Leonardo Hornig"
            content="Teste de conteúdo para post"
          />
        </main>
      </div>
    </div>

  )
}