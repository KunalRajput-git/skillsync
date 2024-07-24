import Link from "next/link";
import { Github, Mailbox, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="py-12 border-t-2">
      <div className="w-11/12 flex flex-col md:flex-row justify-between font-semibold m-auto">
        <div className=" md:w-1/3 text-gray-500 ">
          <h1 className="text-emerald-500 text-2xl">Skill Sync.</h1>
          <p className="mt-2 text-lg mb-2">
            Connect with the perfect partner for personal and professional
            growth. Discover, connect, and achieve your goals together.
          </p>
          <h1 className="text-lg">© 2024, All rights reserved.</h1>
        </div>

        <div className="flex md:w-1/2 items-start justify-between mt-8 md:mt-0">
          <div>
            <h1 className="text-xl text-emerald-500">Navigation</h1>
            <ul className="text-gray-500 flex flex-col gap-2 mt-2 text-lg">
              <Link href="/">Home</Link>
              <Link href="/discover">Discover</Link>
              <Link href="/signup">Signup</Link>
              <Link href="/signin">Signin</Link>
            </ul>
          </div>

          <div>
            <h1 className="text-xl text-emerald-500">Let's Connect</h1>
            <ul className="text-gray-500 flex items-center gap-6 mt-4">
              <Github size={24} />
              <Mailbox size={24} />
              <Linkedin size={24} />
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-12 text-gray-500 text-xl w-11/12 m-auto text-center">
        Made with ❤ by{" "}
        <span className="text-black font-semibold">Kunal Rajput</span>.
      </p>
    </footer>
  );
};

export default Footer;
