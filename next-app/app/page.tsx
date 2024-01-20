import AddFolder from "./components/new-folder/AddFolder";
import Folder from "./components/folders/Folder";
import styles from './Home.module.css'

//typescript to determine type pf elements comint in from API request
interface Folder {
  id: number;
  name: string;
}


const Home = async () => {

  //API request for all existing folders within the db
  const res = await fetch('http://localhost:8000/folders')
  const folders: Folder[] = await res.json()

  //send name of newly created folder to be saved in the database
  const handlePostRequest = async () => {
    try {
      const response = await fetch('http://localhost:8000/folders/new', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'postData': 'zzzzzzzzzzzz' }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('POST request successful:', responseData);
        // Handle the response data as needed
      } else {
        console.error('POST request failed:', response.status, response.statusText);
        // Handle error cases
      }
    } catch (error) {
      console.error('Error during POST request:', error);
      // Handle network errors or other exceptions
    }
  };

// handlePostRequest()

  return (
    <div className={styles.main}>
      {/* render a folder icon for each folder coming from database */}
      {folders.map((folder) => {
        return (
          <Folder key={folder.id} name={folder.name} />
        )
      })}

      {/* render a dynamic icon to create a new folder */}
      <AddFolder />
    </div>
  )
}

export default Home
