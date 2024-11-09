"use client";

import React from "react";
import { useRouter } from "next/navigation";

const EditProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1>Edit Project: {id}</h1>
    </div>
  );
};

export default EditProjectPage;
