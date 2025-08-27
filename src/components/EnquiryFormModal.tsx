// src/components/courses/EnquiryFormModal.tsx

import React from 'react';
import EnquiryForm from './EnquiryForm';

interface EnquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryFormModal: React.FC<EnquiryFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="relative bg-white max-w-3xl w-full rounded-xl overflow-y-auto max-h-[90vh] shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-4xl font-bold"
        >
          ×
        </button>
        <EnquiryForm />
      </div>
    </div>
  );
};

export default EnquiryFormModal;
