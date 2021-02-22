import React, {useState} from 'react';
import { gql, useApolloClient } from '@apollo/client';
import { Button, Image, Container, Card, Input, Form } from 'semantic-ui-react';

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
                    if (inputValue.length === 0) {return}
                    const { data } = await client.query({
                        query: GET_LOTS,
                        variables: {location: inputValue}
                    });
                    setLots(data.search.business)
                    console.log(lots)
                }}>Search Lots</Button>
            <Container textAlign="center">
            {lots.length > 0 ?
                lots.map(({name, location, photos, rating, review_count, url}) => (
                    <div key={url}>
                        <Card href={url}>
                            {photos[0] !== "https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg" ? 
                            <Image 
                                src={photos[0]} 
                                alt={name} 
                                />: <p>No Image Available</p>}
                            <Card.Content>
                                <Card.Header>{name}</Card.Header>
                                <Card.Header>Parking Score: {Number.parseFloat((review_count*rating)/(review_count+1)).toFixed(2)}</Card.Header> 
                                <Card.Meta><span>{location.address1}, {location.city}, {location.state} </span></Card.Meta>
                                <Card.Description>Rating: {rating}</Card.Description>
                                <Card.Description>Review Count: {review_count}</Card.Description>
                            </Card.Content>
                        </Card>
                    </div>
                )): <span>No Valid Data</span>}
            </Container>
        </div>
    )
}