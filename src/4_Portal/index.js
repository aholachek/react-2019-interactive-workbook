import React, { useState, useEffect } from "react"
import styles from "./ignore-me/Portal.module.scss"
import ModalContent from "./ModalContent"
import Modal from "./Modal"

const PortalExample = () => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(showModal => !showModal)

  useEffect(
    () => {
      const body = document.querySelector("body")
      if (showModal) {
        body.style.overflow = "hidden"
        body.style.height = "100vh"
      } else {
        body.style.overflow = ""
        body.style.height = ""
      }
    },
    [showModal]
  )

  return (
    <div>
      <div>
        <button onClick={toggleModal} className="button">
          {showModal ? "hide modal" : "show modal"}
        </button>
      </div>
      <div className={styles.modalContainer}>
        {showModal && (
          <Modal>
            <ModalContent toggleModal={toggleModal} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default PortalExample
