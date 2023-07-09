"use client";

import { Dialog } from "@headlessui/react";
import { FC } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import Button from "../Button";
import Modal from "./Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void | undefined;
  title?: string;
  des?: string;
  isLoading?: boolean;
  executeFunction: () => Promise<void>;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  title,
  des,
  isLoading,
  isOpen,
  onClose,
  executeFunction,
}) => {
  console.log("🚀 ~ file: ConfirmModal.tsx:25 ~ isLoading:", isLoading);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <FiAlertTriangle className="h-6 w-6 text-red-600" />
        </div>

        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {title || "Delete this item?"}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              {des || "Are you sure you want to delete this conversation?"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <Button
          type="button"
          isDisabled={isLoading}
          isLoading={isLoading}
          onClick={executeFunction}
          danger
        >
          Delete
        </Button>

        <Button
          type="button"
          isDisabled={isLoading}
          onClick={onClose}
          secondary
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
