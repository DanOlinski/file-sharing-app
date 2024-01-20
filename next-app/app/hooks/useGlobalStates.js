import { create } from 'zustand'

//all states created here are accessible from any file within the project, making it possible to read and overwrite states globally
const useGlobalStates = create((set) => ({

  //this state determines of the AddFolder icon is going to show up as an add button or a text form
  openNewFolderForm: false,
  setOpenNewFolderForm: (newData) => set(() => ({ openNewFolderForm: newData })),

  //store the name of the newly created folder
  FormData: null,
  setFormData: (newData) => set(() => ({ formData: newData })),

  

}))

export default useGlobalStates
