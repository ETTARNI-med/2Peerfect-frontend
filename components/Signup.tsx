import Link from "next/link";

const Signup = () => {
  return (
    <button className=" h-12 w-20 bl rounded-[17px] shadow border-blue-800 border-4">
      <Link
        href="/singup"
        className="text-lime-500 cursor-pointer underline underline-offset-2 font-semibold"
      >
        Sign Up
      </Link>
    </button>
  );
};

export default Signup;
