import Image from "next/image";
import Link from "next/link";
import "./styles/app.css";
export default function Home() {
  return (
    <div className="flex items-center">
      <li className="mx-2 border border-[#FF0000] px-4 py-2 bg-red-300">
        <Link className="" href="/facebook">
          Facebook
        </Link>
      </li>
      <li className="mx-2 border border-[#FF0000] px-4 py-2 bg-red-300">
        <Link href="/zalo">Zalo</Link>
      </li>
      <li className="mx-2 border border-[#FF0000] px-4 py-2 bg-red-300">
        <Link href="/yahoo">Yahoo</Link>
      </li>
    </div>
  );
}
