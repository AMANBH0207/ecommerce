import { useState } from 'react';
import dataJSON from '../../public/data.json';

export const Modal = ({ closeModal, onSubmit, defaultValue, children }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      id: '',
      para: 'price',
      criterion: '0',
      value: '',
      type: '0',
    },
  );
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = () => {
    if (formState.id && formState.value) {
      setErrors([]);
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key === 'id' ? 'Bond ID' : key);
        } else if (key === 'id') {
          if (!(Object.keys(dataJSON).includes(value) || value === 'ALL')) {
            errorFields.push('INVALID_ID_' + value);
          }
        }
      }
      setErrors(errorFields);
      return false;
    }
  };

  const handleChange = (e) => {
    if (
      e.target.name === 'para' &&
      e.target.value === 'rating' &&
      formState.criterion > 1 &&
      formState.criterion < 4
    ) {
      setFormState({ ...formState, criterion: '0' });
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState); // ✅ API will be called in parent
    closeModal();
  };

  return (
    <div
      className="modal-container fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target.className.includes('modal-container')) closeModal();
      }}
    >
      <div className="modal rounded-md border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark max-h-[95vh] w-full sm:max-w-[600px] flex flex-col overflow-x-hidden">
        {/* Header */}
        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark flex justify-end flex-shrink-0">
          <strong className="text-xl cursor-pointer" onClick={closeModal}>
            &times;
          </strong>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 flex-1">
          {typeof children === 'function'
            ? children({ formState, errors, handleChange, handleSubmit })
            : children}
        </div>

        {/* Footer (Submit button fixed) */}

        <div className="border-t border-stroke py-4 px-7 dark:border-strokedark flex-shrink-0">
          <button
            className="btn flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
