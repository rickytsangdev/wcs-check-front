import React from "react";
import { useQuery, gql } from "@apollo/client";

// Define type for data
type Country = {
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
			<div>
				<h1>Liste des pays</h1>
				{data &&
					data.countries.map(({ name, emoji }) => (
						<div>
							<p>
								{name} {emoji}
							</p>
						</div>
					))}
			</div>
		</section>
	);
};

export default ListOfCountries;
