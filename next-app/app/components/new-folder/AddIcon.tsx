'use client'
import styles from '../folders/Forlder.module.css'
import useGlobalStates from '../../hooks/useGlobalStates'

//this component dysplays a plus symbol icon/button, when clicked a form appears where the user can create and save a new folder
export default function AddIcon() {
  const { openNewFolderForm, setOpenNewFolderForm } = useGlobalStates()

  //controlls if the plus symbol is displaied or if text input form is displayd fo creating a new folder  
  const openForm = () => {
    setOpenNewFolderForm(true)
  }

  if (openNewFolderForm) { return null }

  return (
    <div onClick={openForm}>
      <div className={styles.icon1}>
        <div className={styles.icon2}>
        </div>
      </div>

    </div>
  )
}
