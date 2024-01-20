import styles from '../folders/Forlder.module.css'
import AddIcon from './AddIcon'
import Form from './Form'

//this renders the folder icon that enables the user to create a new folder
export default function AddFolder() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.folder_tab}></div>
        <div className={styles.folder}>
          <AddIcon />
          <Form />
        </div>
      </div>
    </>
  )
}
