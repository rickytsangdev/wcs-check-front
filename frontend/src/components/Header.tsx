import Link from "next/link";

export default function Header() {
	return (
		<header>
			<div className=" navbar bg-[#0039d0] text-white flex flex-col">
				<Link className="btn btn-ghost text-xl" href="/">
					COUNTRIES APP
				</Link>
			</div>
		</header>
	);
}
