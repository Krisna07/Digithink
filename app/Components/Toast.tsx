"use client";
import React, { useEffect, useState } from "react";

interface ToastProps {
  children: React.ReactNode;
}

const Toast = ({ children }: ToastProps) => {
  const [toast, setToast] = useState(false);
  useEffect(() => {
    children && setToast(true);
    if (toast) {
      const timer = setInterval(() => {
        setToast(false);
      }, 500);

      return () => clearInterval(timer);
    }
  }, [toast]);
  return (
    toast && (
      <div
        className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
        role="alert"
      >
        <div className="w-full font-normal flex place-items-center justify-between">
          {children}
        </div>
      </div>
    )
  );
};

export default Toast;
