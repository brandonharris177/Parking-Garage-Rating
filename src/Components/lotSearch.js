import React, {useState} from 'react';
import { gql, useApolloClient } from '@apollo/client';
import { Button, Image, Container, Input, Form } from 'semantic-ui-react';

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
            <Form>
                <Form.Field>
                    <label>
                        Search Location:
                        <Input focus placeholder="Search..." type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    </label>
                </Form.Field>
            </Form>
            <Button
                onClick={async () => {
                    const { data } = await client.query({
                        query: GET_LOTS,
                        variables: {location: inputValue}
                    });
                    setLots(data.search.business)
                    console.log(lots)
                }}>Search Lots</Button>
            <div>
            {lots.length > 0 ?
                lots.map(({name, location, photos, rating, review_count, url}) => (
                    <div key={url}>
                        <Container textAlign='center'>
                            {photos[0] ? <Image 
                                href={url}
                                src={photos[0]} 
                                as='a'
                                size='medium'
                                alt={name} 
                                circular
                                />: <p>No Image Available</p>}
                            <p>Name: {name} </p> 
                            <p>Adress: {location.adress1}</p>
                            <p>City: {location.city}</p>
                            <p>State: {location.state}</p>
                            <p>Rating: {rating}</p>
                            <p>Review Count: {review_count}</p>
                            <p>URL: {url}</p>
                            <p>Score: {((review_count*rating)/(review_count+1))}</p>
                        </Container>
                    </div>
                )): <span>No Valid Data</span>}
            </div>
        </div>
    )
}