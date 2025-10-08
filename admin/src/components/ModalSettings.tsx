import { useState } from 'react';

export const Modal = ({
  closeModal,
  onSubmit,
  defaultValue = {},
  children,
}) => {
  const [formState, setFormState] = useState(defaultValue);
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = () => {
    let errorFields: string[] = [];

    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        errorFields.push(key);
      }
    }

    setErrors(errorFields);
    return errorFields.length === 0;
  };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, files, value } = e.target;

  if (files) {
    if (name === "images") {
      // Multiple images (FileList → File[])
      setFormState((prev) => ({
        ...prev,
        images: [...(prev.images || []), ...Array.from(files)],
      }));
    } else if (name === "image") {
      // Single image
      setFormState((prev) => ({
        ...prev,
        image: files[0], // just take the first file
      }));
    }
  } else {
    // Non-file inputs (text, number, date, etc.)
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
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
            ? children({ formState, errors, handleChange })
            : children}
        </div>

        {/* Footer */}
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
