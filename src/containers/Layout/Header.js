import Link from "next/link";
import Theme from "./moods/Theme";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log({ session, status });
  return (
    <header className="bg-white w-full shadow-lg">
      <nav className="flex justify-between py-4 mb-6 max-w-screen-xl mx-auto">
        <h1 className="font-bold">
          <a href="#">TodoList App</a>
        </h1>
        <ul className={`flex items-center gap-x-6 ${status === "loading" && !session?"opacity-0":"opacity-100"}`}>
          <Link href="/">
            <a
              className={
                router.pathname === "/" ? "text-blue-500 font-bold" : ""
              }
            >
              Home
            </a>
          </Link>
          <Link href="/protected-ssr">
            <a
              className={
                router.pathname === "/protected-ssr"
                  ? "text-blue-500 font-bold"
                  : ""
              }
            >
              Protected-ssr
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={
                router.pathname === "/profile" ? "text-blue-500 font-bold" : ""
              }
            >
              Profile
            </a>
          </Link>
          {!session && status !== "loading" && (
            <Link href="#">
              <button onClick={() => signIn("github")}>Sign in</button>
            </Link>
          )}
          {session && (
            <Link href="#">
              <button onClick={() => signOut()}>Sign out</button>
            </Link>
          )}
        </ul>
        <Theme />
      </nav>
    </header>
  );
};

export default Header;
