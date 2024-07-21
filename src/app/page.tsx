import Image from "next/image";
import { Button } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="md:py-4 md:px-8 relative">
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="p-4 md:w-1/2   max-w-full">
              <h1 className="text-3xl md:text-6xl font-bold text-emerald-500 break-words">
                Discover.Connect.Grow
              </h1>
              <p className="font-bold mt-2 md:text-xl text-emerald-400">
                A platform designed to connect you with the perfect partner for
                personal and professional growth. Discover, connect, and achieve
                your goals together.
              </p>

              <Link href="/discover">
                <Button className="mt-6 py-2 px-6 w-full md:w-max text-xl">
                  Find My Growth Partner
                </Button>
              </Link>
            </div>
            <div className="rounded-xl">
              <Image
                className="translate -scale-x-100"
                src="/images/8626698.png"
                alt="Example Image"
                width={500}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
