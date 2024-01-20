import Folder from "./components/folders/Folder";
import styles from './Home.module.css'
import Form from "./components/new-folder/Form";

//typescript to determine type pf elements comint in from API request
interface Folder {
  id: number;
  name: string;
}


const Home = async () => {

 
  //API request for all existing folders within the db
  const res = await fetch('http://localhost:8000/folders')
  const folders: Folder[] = await res.json()

  return (
    <div className={styles.main}>
      {/* render a folder icon for each folder coming from database */}
      {folders.map((folder) => {
        return (
          <Folder key={folder.id} name={folder.name} />
        )
      })}

      {/* render a dynamic icon to create a new folder */}
      <Form />
    </div>
  )
}

export default Home
