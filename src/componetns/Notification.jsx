import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useTodo } from "@/hooks/useTodo.jsx";

export const Notification = () => {
  const { error, setError } = useTodo();
  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [error, setError]);

  return createPortal(
    error && (
      <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-[#e06155] p-2 text-white">
        Ошибка на сервере. Попробуйте позже.
      </div>
    ),
    document.body,
  );
};

export default Notification;
