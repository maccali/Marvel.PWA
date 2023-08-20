import React, { ReactNode } from 'react'

import styles from './modal.module.css'
import Navigator from './../navigator/index';
import { TfiClose } from 'react-icons/tfi';

type ModalFace = {
  open: boolean
  closeModal: (flag: boolean) => void
  children: ReactNode
}

function Modal({ open, closeModal, children }: ModalFace) {
  return (
    <div className={`${styles.modalBack} container mx-auto`}>
      <div className={`${styles.modal} ${open && styles.modalOpen}`}>
        <div>
          <div className={`${styles.nav} `}>
            <Navigator title="Close Modal" action={() => {
              closeModal(false)
            }}>
              <TfiClose />
            </Navigator>
          </div>
          <div className={`${styles.content} `}>

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
