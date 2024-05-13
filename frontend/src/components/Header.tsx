import Link from "next/link";

export default function Header() {
	return (
		<header>
			<div className=" navbar bg-[#0039d0] text-white flex flex-col">
				<a className="btn btn-ghost text-xl">Checkpoint : frontend</a>
				<Link href="/">Countries</Link>
			</div>
		</header>
	);
}
