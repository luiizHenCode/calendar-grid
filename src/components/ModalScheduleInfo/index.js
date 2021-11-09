import React from "react";
import Modal from "react-modal";

import styles from "./styles.module.scss";

import { useCalendar } from "../../hooks/useCalendar";

Modal.setAppElement("#root");

export function ModalScheduleInfo() {
  const { modalEvent, handleCloseModalEvent } = useCalendar();

  return (
    <Modal
      isOpen={modalEvent}
      onRequestClose={handleCloseModalEvent}
      shouldCloseOnOverlayClick={true}
      overlayClassName={styles.modalOverlay}
      className={styles.modalContent}
    >
      <div>oi</div>
    </Modal>
  );
}
