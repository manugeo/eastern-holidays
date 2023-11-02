'use client'

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const Navbar = ({ className }) => {
  const router = useRouter();

  return (
    <div className={`flex justify-between ${className}`}>
      <Button variant="outline" size="icon" onClick={() => router.back()}><ChevronLeft /></Button>
      <ModeToggle />
    </div>
  );
};

export default Navbar;