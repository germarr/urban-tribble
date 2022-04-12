import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/tailwind.css"


export const links:LinksFunction = () =>{
  return[
    {
      rel:"stylesheet",
      href:styles
    }
  ]
}

export default function Index() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-red-200/70">
      <h1 className="font-semibold text-6xl italic">Hello 👋</h1>
    </div>
  );
}
