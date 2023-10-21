import React from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-[100vh]">
      <h1 className="text-white">Learning authentication with Appwrite</h1>
      <Outlet></Outlet>
    </section>
  );
};
