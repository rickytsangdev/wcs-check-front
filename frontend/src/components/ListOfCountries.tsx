import React from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

// Define type for data
type Country = {
	code: string;
	name: string;
	emoji: string;
};

type QueryData = {
	countries: Country[];
};

// request GraphQL here
const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			code
			name
			emoji
		}
	}
`;

const ListOfCountries: React.FC = () => {
	const { data, loading, error } = useQuery<QueryData>(GET_COUNTRIES);

	if (loading) return <p>Chargement...</p>;
	if (error) return <p>Une erreur est survenue : {error.message}</p>;

	return (
		<section>
			<div className="p-4">
				<h1 className="text-2xl font-bold mb-4 text-black text-center">
					All Countries
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{data &&
						data.countries.map(({ code, name, emoji }) => (
							<Link
								key={code}
								href={`/country/${code}`}
								className="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
							>
								<p className="text-lg font-semibold text-center">
									{name} {emoji}
								</p>
							</Link>
						))}
				</div>
			</div>
		</section>
	);
};

export default ListOfCountries;
