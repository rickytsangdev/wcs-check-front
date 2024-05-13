import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type Continent = {
	__typename?: "Continent";
	id: Scalars["Int"];
	name: Scalars["String"];
};

export type Country = {
	__typename?: "Country";
	code: Scalars["String"];
	continent?: Maybe<Continent>;
	emoji: Scalars["String"];
	id: Scalars["Int"];
	name: Scalars["String"];
};

export type Mutation = {
	__typename?: "Mutation";
	addContinent: Continent;
	addCountry: Country;
};

export type MutationAddContinentArgs = {
	data: NewContinentInput;
};

export type MutationAddCountryArgs = {
	data: NewCountryInput;
};

export type NewContinentInput = {
	name: Scalars["String"];
};

export type NewCountryInput = {
	code: Scalars["String"];
	continent?: InputMaybe<ObjectId>;
	emoji: Scalars["String"];
	name: Scalars["String"];
};

export type ObjectId = {
	id: Scalars["Int"];
};

export type Query = {
	__typename?: "Query";
	continents: Array<Continent>;
	countries: Array<Country>;
	country: Country;
};

export type QueryCountryArgs = {
	code: Scalars["String"];
};

export type CreateCountryMutationVariables = Exact<{
	data: NewCountryInput;
}>;

export type CreateCountryMutation = {
	__typename?: "Mutation";
	addCountry: {
		__typename?: "Country";
		code: string;
		emoji: string;
		name: string;
		continent?: { __typename?: "Continent"; id: number } | null;
	};
};

export type GetContinentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetContinentsQuery = {
	__typename?: "Query";
	continents: Array<{ __typename?: "Continent"; id: number; name: string }>;
};

export type CountryQueryVariables = Exact<{
	code: Scalars["String"];
}>;

export type CountryQuery = {
	__typename?: "Query";
	country: {
		__typename?: "Country";
		code: string;
		emoji: string;
		id: number;
		name: string;
		continent?: { __typename?: "Continent"; name: string } | null;
	};
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
	__typename?: "Query";
	countries: Array<{
		__typename?: "Country";
		id: number;
		emoji: string;
		code: string;
		name: string;
	}>;
};

export const CreateCountryDocument = gql`
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
export type CreateCountryMutationFn = Apollo.MutationFunction<
	CreateCountryMutation,
	CreateCountryMutationVariables
>;

/**
 * __useCreateCountryMutation__
 *
 * To run a mutation, you first call `useCreateCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCountryMutation, { data, loading, error }] = useCreateCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCountryMutation(
	baseOptions?: Apollo.MutationHookOptions<
		CreateCountryMutation,
		CreateCountryMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<
		CreateCountryMutation,
		CreateCountryMutationVariables
	>(CreateCountryDocument, options);
}
export type CreateCountryMutationHookResult = ReturnType<
	typeof useCreateCountryMutation
>;
export type CreateCountryMutationResult =
	Apollo.MutationResult<CreateCountryMutation>;
export type CreateCountryMutationOptions = Apollo.BaseMutationOptions<
	CreateCountryMutation,
	CreateCountryMutationVariables
>;
export const GetContinentsDocument = gql`
	query GetContinents {
		continents {
			id
			name
		}
	}
`;

/**
 * __useGetContinentsQuery__
 *
 * To run a query within a React component, call `useGetContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinentsQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetContinentsQuery,
		GetContinentsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetContinentsQuery, GetContinentsQueryVariables>(
		GetContinentsDocument,
		options
	);
}
export function useGetContinentsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetContinentsQuery,
		GetContinentsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetContinentsQuery, GetContinentsQueryVariables>(
		GetContinentsDocument,
		options
	);
}
export type GetContinentsQueryHookResult = ReturnType<
	typeof useGetContinentsQuery
>;
export type GetContinentsLazyQueryHookResult = ReturnType<
	typeof useGetContinentsLazyQuery
>;
export type GetContinentsQueryResult = Apollo.QueryResult<
	GetContinentsQuery,
	GetContinentsQueryVariables
>;
export const CountryDocument = gql`
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

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryQuery(
	baseOptions: Apollo.QueryHookOptions<CountryQuery, CountryQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<CountryQuery, CountryQueryVariables>(
		CountryDocument,
		options
	);
}
export function useCountryLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<CountryQuery, CountryQueryVariables>(
		CountryDocument,
		options
	);
}
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>;
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>;
export type CountryQueryResult = Apollo.QueryResult<
	CountryQuery,
	CountryQueryVariables
>;
export const GetCountriesDocument = gql`
	query getCountries {
		countries {
			id
			emoji
			code
			name
		}
	}
`;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetCountriesQuery,
		GetCountriesQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
		GetCountriesDocument,
		options
	);
}
export function useGetCountriesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetCountriesQuery,
		GetCountriesQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
		GetCountriesDocument,
		options
	);
}
export type GetCountriesQueryHookResult = ReturnType<
	typeof useGetCountriesQuery
>;
export type GetCountriesLazyQueryHookResult = ReturnType<
	typeof useGetCountriesLazyQuery
>;
export type GetCountriesQueryResult = Apollo.QueryResult<
	GetCountriesQuery,
	GetCountriesQueryVariables
>;
