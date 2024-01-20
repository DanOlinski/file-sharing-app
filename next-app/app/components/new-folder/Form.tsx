'use client'
import styles from './Form.module.css'
import useGlobalStates from '../../hooks/useGlobalStates'
import { useEffect, useRef } from 'react'

//this component is for inputing the name of a new folder 
const Form = () => {
  //store name of newly created folder
  const { formData, setFormData } = useGlobalStates()

  //this state controlls if a plus sign of a text form is displaied
  const { openNewFolderForm, setOpenNewFolderForm } = useGlobalStates()

  //this refference along with the useEffect function below is what permits the app to know if a user clicked outside the div, and then determine if the for will stay open or if it will close. 
  //Typescript needs to be added to the formRef component in orderto fix the typescript errors.
  let formRef = useRef()

  useEffect(() => {
    const handler = (e: React.FormEvent<HTMLInputElement>) => {
      if (!formRef.current.contains(e.target)) {
        setOpenNewFolderForm(false)
      }
    }
    document.addEventListener("mousedown", handler)
  })

  //API request to send name of newly created folder to be saved in the database
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

  //capture what is typed into the form, for form submission
  const handleFormInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const folderName = e.target.value

    setFormData({
      ...formData,
      folderName
    });

    // console.log(formData)
  }

  // Handle form submission
  const handleSubmit = () => {
    
    if(formData){
      handlePostRequest()

      setFormData(null)
      setOpenNewFolderForm(false)
      // console.log(formData)
    }
  };

  

  if (!openNewFolderForm) { return null }

  return (
    <div ref={formRef}>
      <div className={styles.tick} onClick={handleSubmit}>
        ✔
      </div>
      <form>
        <input
          className={styles.form}
          placeholder="New Folder"
          type="text"
          onChange={handleFormInputChange}
        >
        </input>
      </form>
    </div>
  )
}

export default Form