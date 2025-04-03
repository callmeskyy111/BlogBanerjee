import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1>Hello from the Index Page</h1>
    <Link href='/dashboard'>To Dashboard</Link>
    </div>
  );
}
