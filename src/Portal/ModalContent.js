import React from "react"
import styles from "./Portal.module.scss"
const ModalContent = ({ toggleModal }) => {
  return (
    <div className={styles.modalContent} onClick={toggleModal}>
      hello I am some modal content
    </div>
  )
}

export default ModalContent
