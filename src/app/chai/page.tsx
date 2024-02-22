import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>page</div>
      <Button variant="chai" size="sm ">
        {" "}
        shadcn button{" "}
      </Button>
    </main>
  );
};

export default page;
