"use client";

import { useRouter } from "next/navigation";

const FacebookPage = () => {
  const router = useRouter();
  const handleButton = () => {
    console.log("hello world");
    router.push("/");
  };
  return (
    <div>
      Facebook
      <div>
        <button className="" onClick={() => handleButton()}>
          Back
        </button>
      </div>
    </div>
  );
};
export default FacebookPage;
