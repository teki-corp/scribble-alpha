'use client'
import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import { MaskedImage } from "@/components/ui/masked-image";

export default function SignUpPage() {
  return (
    <div className="grid h-svh max-h-svh lg:grid-cols-2 overflow-hidden px-4">
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
            <LoginForm isSignUp={true} />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex items-center justify-center">
        <MaskedImage
          src="/auth-image.png"
          alt="Description"
          width={1024}
          height={1536}
          variant="shape6"
          className="w-full h-svh"
        />
      </div>
    </div>
  );
}