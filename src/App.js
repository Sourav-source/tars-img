import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <React.Fragment>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <div className="container w-full h-screen p-4 px-10 py-10 mx-auto text-sm text-gray-900">
        <RouterProvider router={router} />
      </div>
    </React.Fragment>
  );
};

export default App;
