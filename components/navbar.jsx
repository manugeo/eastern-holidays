'use client'

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = ({ className }) => {
  const router = useRouter();

  return (
    <div className={className}>
      <Button variant="outline" size="icon" onClick={() => router.back()}><ChevronLeft /></Button>
    </div>
  );
};

export default Navbar;