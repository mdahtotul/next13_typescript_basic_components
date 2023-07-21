"use client";

import Image from "next/image";
import Modal from "./Modal";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image src={src} className="object-cover" alt="image" fill />
      </div>
    </Modal>
  );
};

export default ImageModal;
