import { Link } from "react-router";

export default function Home() {
  return (
    <header>
      <div className="flex justify-center w-100%">
        <div className=" w-240 h-200 bg-amber-500 flex justify-center">
          <Link className=" text-9xl cursor-pointer" to="/menu">
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}
