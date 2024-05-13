import {
	CreateCountryMutation,
	CreateCountryMutationVariables,
	GetContinentsQuery,
} from "../graphql/schema";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const CREATE_COUNTRY = gql`
	mutation CreateCountry($data: NewCountryInput!) {
		addCountry(data: $data) {
			code
			emoji
			name
			continent {
				id
			}
		}
	}
`;

const GET_CONTINENTS = gql`
	query GetContinents {
		continents {
			id
			name
		}
	}
`;

export default function Form() {
	const [newCountry, setNewCountry] = useState<CreateCountryMutationVariables>({
		data: {
			code: "",
			emoji: "",
			name: "",
			continent: {
				id: 1,
			},
		},
	});

	const { loading, error, data } = useQuery<GetContinentsQuery>(GET_CONTINENTS);

	function handleChange(e: any) {
		const { name, value } = e.target;
		setNewCountry((prevState) => ({
			...prevState,
			data: {
				...prevState.data,
				[name]: value,
			},
		}));
	}

	const [createCountry] = useMutation<
		CreateCountryMutation,
		CreateCountryMutationVariables
	>(CREATE_COUNTRY);

	const createNewCountry = async () => {
		try {
			const { data } = await createCountry({
				variables: {
					data: {
						code: newCountry.data.code,
						emoji: newCountry.data.emoji,
						name: newCountry.data.name,
						continent: {
							id: newCountry.data.continent?.id || 1,
						},
					},
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 border-2 border-blue-900 shadow-lg rounded-md bg-white">
			<form action="" method="post" className="max-w-xl mx-auto p-4 space-y-4">
				<h2 className=" text-center font-bold">Add new country</h2>
				<div className="form-container ">
					<label htmlFor="name">Name</label>
					<input
						className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
						type="text"
						id="label"
						name="name"
						onChange={handleChange}
					/>
				</div>
				<div className="form-container">
					<label htmlFor="emoji">Emoji</label>
					<input
						className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
						type="text"
						id="label"
						name="emoji"
						onChange={handleChange}
					/>
				</div>
				<div className="form-container">
					<label htmlFor="code">Code</label>
					<input
						className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
						type="text"
						id="code"
						name="code"
						onChange={handleChange}
					/>
				</div>
				<div className="form-container">
					<label htmlFor="continent">Continent</label>
					<select
						className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
						id="code"
						name="continent"
						onChange={handleChange}
					>
						<option value="">Select a continent</option>
						{data?.continents.map((continent) => (
							<option value={continent.id} key={continent.id}>
								{continent.name}
							</option>
						))}
					</select>
				</div>
				<div className="form-container">
					<button
						type="submit"
						onClick={createNewCountry}
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
					>
						Add Country
					</button>
				</div>
			</form>
		</div>
	);
}
