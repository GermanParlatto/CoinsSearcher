import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-400 min-h-screen p-4">
      {children}
    </div>
  );
};

Layout.displayName = "Layout";
export default Layout;
