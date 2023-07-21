"use client";

import { useState } from "react";
import Button from "../Button";
import ConfirmModal from "./ConfirmModal";

const ShowModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // This function is just for demo purpose
  const handleDelete = async () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 2000);
    })
      .then((res) => {
        console.log("Provided res");
      })
      .catch((err: any) => {
        console.log("🚀 ~ file: ShowModal.tsx:23 ~ handleDelete ~ err:", err);
      })
      .finally(() => {
        setIsLoading(false);
        handleClose();
      });
  };

  return (
    <div>
      <ConfirmModal
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={handleClose}
        executeFunction={handleDelete}
      />
      <Button type="button" onClick={handleOpen} isRounded={true}>
        Open Modal
      </Button>
    </div>
  );
};

export default ShowModal;
