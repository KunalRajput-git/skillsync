import type { Metadata } from "next";
import { Button, Input, Label } from "@/app/components";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Skillsync - my profile",
  description:
    "Connect with the perfect partner for personal and professional growth. Discover, connect, and achieve your goals together.",
};

const Profile = () => {
  return (
    <>
      <div className="p-14 bg-emerald-500 rounde2xl"></div>
      <div className="p-8 relative">
        <div className="absolute -top-12 border-8 border-white rounded-full">
          <Image
            src="https://shorturl.at/sr5ui"
            alt="My Image"
            width={85}
            height={85}
            className="object-contain rounded-full"
          />
        </div>
        <div className="flex mt-6 justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Kunal Rajput</h1>
            <h2 className="text-gray-400 font-bold md:text-lg">
              Software Engineer
            </h2>
            <h2 className="text-gray-400 font-bold md:text-lg">Delhi, India</h2>
            <Button className="p-4 py-1 text-sm mt-3 md:text-lg">
              Edit Profile
            </Button>
          </div>
          <div className="md:text-lg">
            <h2 className="text-gray-400 font-bold">Level</h2>
            <h2 className="text-gray-400 font-bold">Beginner</h2>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold">Bio</h1>
          <p className="md:text-lg font-bold text-gray-400">
            here i am going to explain the system mechanishm of social
            networking tech also metains to buy senators also kairned maint{" "}
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-bold">Finding Partner in </h1>
          <div className="mt-2 flex gap-3 md:gap-4 flex-wrap">
            <h3 className="border text-sm md:text-base w-max bg-emerald-500 py-1 px-3 rounded-3xl text-white font-bold">
              Data Structures And Algorithms
            </h3>
            <h3 className="border text-sm md:text-base w-max bg-emerald-500 py-1 px-3 rounded-3xl text-white font-bold">
              Frontend Development
            </h3>
            <h3 className="border text-sm md:text-base w-max bg-emerald-500 py-1 px-3 rounded-3xl text-white font-bold">
              Backend Development
            </h3>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-xl font-bold">Bio</h1>
          <p className="font-bold text-gray-400">
            here i am going to explain the system mechanishm of social
            networking tech also metains to buy senators also kairned maint{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
