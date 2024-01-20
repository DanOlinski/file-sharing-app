import styles from './Forlder.module.css'

interface Props {
  key: number;
  name: string
}

//This component renders a folder icon for each exiting folder in the database
export default function Folder(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.folder_tab}></div>
        <div className={styles.folder}>
        </div>
        {props.name}
      </div>
    </>
  )
}
