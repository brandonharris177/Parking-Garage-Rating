import React, {useState} from 'react';
import { gql, useApolloClient } from '@apollo/client';

const GET_LOTS = gql`
    query searchByLocation($location: String){
    search(location: $location, categories: "parking, All"){
        business{
        name
        location{
            address1
            city
            state
        }
        photos
        rating
        review_count
        url
        }
    }
}
`

export default function LotSearch() {
    const [lots, setLots] = useState([])
    const [inputValue, setInputValue] = useState("")
    const client = useApolloClient();

    return (
        <div>
            <form>
                <label>
                    Search Location:
                    <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                </label>
            </form>
            <button
                onClick={async () => {
                    const { data } = await client.query({
                        query: GET_LOTS,
                        variables: {location: inputValue}
                    });
                    setLots(data.search.business)
                    console.log(lots)
                }}>Search Lots</button>
            <div>
                {lots.map(({name, location, photos, rating, review_count, url}) => (
                    <div key={url}>
                        <p>{ name, location, photos, rating, review_count, url}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}