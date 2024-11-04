import { Toaster } from 'sonner';

export default function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: 'var(--toast-bg)',
          color: 'var(--toast-color)',
        },
        className: 'dark:bg-gray-800 dark:text-white',
      }}
    />
  );
}