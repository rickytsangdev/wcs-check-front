import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import React from "react";

type CountryDetailsType = {
	code: string;
	name: string;
	emoji: string;
	continent: {
		name: string;
	};
};

type QueryData = {
	country: CountryDetailsType;
};

const GET_COUNTRY_DETAILS = gql`
	query Country($code: String!) {
		country(code: $code) {
			code
			emoji
			id
			name
			continent {
				name
			}
		}
	}
`;

const CountryDetails: React.FC = () => {
	const router = useRouter();
	const { code } = router.query;

	const { data, loading, error } = useQuery<QueryData, { code: string }>(
		GET_COUNTRY_DETAILS,
		{
			variables: { code: code as string },
			skip: !code,
		}
	);

	if (loading) return <p>Chargement...</p>;
	if (error) return <p>Une erreur est survenue: {error.message}</p>;
	if (!data) return <p>Pas de données disponibles pour ce pays.</p>;

	const { name, emoji, continent } = data.country;

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4 text-black text-center pt-5">
				Country Details
			</h1>
			<div className="flex justify-center flex-col items-center text-black">
				<p className="text-5xl pb-3">{emoji}</p>
				<p>
					Name: {name} ({data.country.code})
				</p>
				<p>Continent: {continent.name}</p>
			</div>
		</div>
	);
};

export default CountryDetails;
