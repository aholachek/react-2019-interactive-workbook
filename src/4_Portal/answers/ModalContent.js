import React from "react"
import styles from "../ignore-me/Portal.module.scss"
const ModalContent = ({ toggleModal }) => {
  return (
    <div className={styles.modalContent} onClick={toggleModal}>
      <div>
        <h1 className="title is-3">Hello I am some modal content.</h1>
        <p className="subtitle is-4">I should cover the entire page.</p>
        <button className="button">close modal</button>
      </div>
    </div>
  )
}

export default ModalContent
