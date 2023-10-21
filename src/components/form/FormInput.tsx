import React from "react";
import classnames from "classnames";

export const FormInput = ({
  inputType,
  inputName,
  inputId,
  placeholder,
  className,
}: {
  inputType: string;
  inputName?: string;
  inputId?: string;
  placeholder?: string;
  className?: string;
}) => {
  const combinedClassName = classnames(
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    className,
  );
  return (
    <input
      type={inputType}
      name={inputName}
      id={inputId}
      className={combinedClassName}
      placeholder={placeholder}
    />
  );
};
