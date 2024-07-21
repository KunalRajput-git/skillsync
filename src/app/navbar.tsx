"use client";
import { useEffect, useState } from "react";
import { X, List } from "react-bootstrap-icons";
import Link from "next/link";
import { Button } from "./components";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDropdownVisible(false);
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row justify-between py-6 px-6 md:px-8 md:items-center border-b">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="font-bold text-3xl text-emerald-500">
            Skill Sync
          </span>{" "}
          -{" "}
          <span className="text-emerald-500 font-bold">
            your growth partner!
          </span>
        </Link>

        {isDropdownVisible ? (
          <X
            size={28}
            className="md:hidden text-lg"
            onClick={() => setIsDropdownVisible(false)}
          />
        ) : (
          <List
            size={24}
            className="md:hidden text-lg"
            onClick={() => setIsDropdownVisible(true)}
          />
        )}
      </div>
      <div
        className={`${
          isDropdownVisible ? "block" : "hidden"
        } md:block w-full md:w-max`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 w-full">
          <li className="cursor-pointer text-xl text-emerald-500">
            <Link href="/discover">Discover</Link>
          </li>
          <li className="w-full">
            <Link href="/signin">
              <Button className="border-emerald-500 bg-transparent py-2 px-10 text-emerald-500 w-full">
                Signin
              </Button>
            </Link>
          </li>
          <li className="w-full">
            <Link href="/signup">
              <Button className="py-2 px-10 text-xl w-full">Signup</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
