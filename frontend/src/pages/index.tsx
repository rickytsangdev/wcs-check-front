// Import components
import Header from "@/components/Header";
import ListOfCountries from "@/components/ListOfCountries";
import AddCountryForm from "@/components/Form";

export default function Home() {
	return (
		<>
			<Header />
			<AddCountryForm />
			<ListOfCountries />
		</>
	);
}
