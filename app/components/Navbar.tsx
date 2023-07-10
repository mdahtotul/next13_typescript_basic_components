"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex ">
      <Button
        onClick={() => router.push("/")}
        type="button"
        secondary
        tooltip="/"
      >
        Home page
      </Button>
      <Button
        onClick={() => router.push("/show-skeleton")}
        type="button"
        secondary
        tooltip="/show-skeleton"
      >
        Show Skeleton page
      </Button>
    </nav>
  );
};

export default Navbar;
