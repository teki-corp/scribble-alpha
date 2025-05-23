"use client";
import { GalleryVerticalEnd } from "lucide-react";
import { usePathname } from "next/navigation";

import { LoginForm } from "@/components/login-form";
import { MaskedImage } from "@/components/ui/masked-image";
import Image from "next/image";

export default function LoginPage() {
  const pathname = usePathname();
  const isSignUpPage = pathname === "/signup";

  return (
    <div className="grid max-h-screen lg:grid-cols-2 overflow-hidden">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Scribble.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm isSignUp={isSignUpPage} />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex items-center justify-center ">
        {/* <Image
          src="/chris-yang-laEx5fIf2H0-unsplash.jpg"
          alt=""
          width={1920}
          height={2880}
          className="w-full h-svh"
        /> */}
        <MaskedImage
          src="/auth-image.png"
          alt="Description"
          width={1024}
          height={1536}
          variant="shape6"
          className="px-4 w-full h-svh"
        />
      </div>
    </div>
  );
}
