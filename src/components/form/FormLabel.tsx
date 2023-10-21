import React from "react";
import classnames from "classnames";

export const FormLabel = ({
  htmlFor,
  className,
  labelTitle,
}: {
  htmlFor: string;
  className?: string;
  labelTitle: string;
}) => {
  const combinedClassNames = classnames(
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
    className,
  );
  return (
    <label htmlFor={htmlFor} className={combinedClassNames}>
      {labelTitle}
    </label>
  );
};
