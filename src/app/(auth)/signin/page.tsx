import { Metadata } from "next";
import { Button, Input, Label } from "../components";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skillsync - Sign in",
  description:
    "Connect with the perfect partner for personal and professional growth. Discover, connect, and achieve your goals together.",
};

export default function Signin() {
  return (
    <div className="flex justify-center">
      <div className="lg:w-1/2 py-4 px-4 md:py-14 md:px-28 min-w-[300px]">
        <div className="py-10 px-8 rounded-3xl border shadow-xl">
          <h1 className="text-2xl font-bold text-emerald-500 text-center mb-2">
            Sign in
          </h1>
          <Label className="mt-8">Email (required)</Label>
          <Input placeholder="Enter Email" />
          <Label className="pt-8">Password (required)</Label>
          <Input placeholder="Enter Password" type="password" />
          <Button className="mt-4 w-full p-3">Sign in</Button>
          <div className="flex items-center justify-between mt-4 gap-2 font-bold text-emerald-500">
            <div className="border w-1/2"></div>
            OR
            <div className="border w-1/2"></div>
          </div>
          <Button className="mt-4 w-full p-3 bg-transparent text-emerald-500">
            Sign in with Google
          </Button>
          <h3 className="mt-4">
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="font-bold text-emerald-500">Click Here</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
