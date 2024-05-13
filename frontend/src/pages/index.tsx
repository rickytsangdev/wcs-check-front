// Import components
import Header from "@/components/Header";
import ListOfCountries from "@/components/ListOfCountries";

export default function Home() {
	return (
		<>
			<Header />
			<h1 className="text-3xl font-bold underline">Hello, wilder !</h1>
			<ListOfCountries />
		</>
	);
}
