import Link from "next/link";

const SignIn = () => {
  return (
    <button className=" h-12 w-20 bl rounded-[17px] shadow border-blue-800 border-4">
      <Link
        href="/singin"
        className="text-lime-500 cursor-pointer underline underline-offset-2 font-semibold"
      >
        Sign In
      </Link>
    </button>
  );
};

export default SignIn;
