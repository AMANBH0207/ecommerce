import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
}

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText,
  cancelText,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Light transparent backdrop */}
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)]" />
        </Transition.Child>

        {/* Centered Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                {title && (
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    {title}
                  </Dialog.Title>
                )}

                <div className="mt-4">{children}</div>

                {/* Actions */}
                <div className="mt-6 flex justify-end gap-3">
                  {cancelText && (
                    <button
                      onClick={onClose}
                      className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {cancelText}
                    </button>
                  )}
                  {onConfirm && (
                    <button
                      onClick={onConfirm}
                      className="rounded-md bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600"
                    >
                      {confirmText}
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
