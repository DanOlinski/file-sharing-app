import { revalidatePath } from '@/node_modules/next/cache';
import styles1 from '../folders/Forlder.module.css'
import styles from './Form.module.css'

//this component is for inputing the name of a new folder 
const Form = () => {
  
    //send name of newly created folder to be saved in the database
    const handlePostRequest = async (formData: FormData) => {
      'use server'
      
      const data = formData.get('folderName')
      if(data){
        const random = Math.random()

        try {
          const response = await fetch('http://localhost:8000/folders/new', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'postData': data }),
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
        revalidatePath('/')
      }

    };

    
  return (
    <>
    <div className={styles1.container}>
      <div className={styles1.folder_tab}></div>
      <div className={styles1.folder}>
      <form action={handlePostRequest}>
      
      <button className={styles.button}>
      ✔
        </button>

        <input
          className={styles.form}
          placeholder="New Folder"
          type="text"
          name='folderName'
        >
        </input>
        
      </form>
      </div>
    </div>
  </>
      
  )
}

export default Form