import AddFolder from "./components/folders/AddFolder";
import Folder from "./components/folders/Folder";
import styles from './Home.module.css'

const Home = async () => {


  return (
    <div className={styles.main}>
      <Folder />
      <AddFolder />
    
    </div>
  )
}

export default Home
