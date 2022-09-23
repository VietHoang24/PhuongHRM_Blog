import React from "react";

// components

import CardArticles from "components/Cards/CardArticles";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  return (
    <>
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardArticles color="light" />
        </div>
      </div>
    
    </>
  );
}

Tables.layout = Admin;
