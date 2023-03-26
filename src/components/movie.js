import React from 'react';
// import ReviewList from './reviewList';
// import Stars from './stars';
import Card from 'react-bootstrap/Card';
import ReviewForm from './reviewForm';


export default class Movie extends React.Component {
    //holds movie data - image, title, synopsis, rating
    //holds review list
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            synopsis: props.synopsis,
            rating: props.rating
        };

    }
    render() {
        return (
            <Card className="row-cols-4" style={{width: '18rem'}}>
                <Card.Img variant="top" src={this.state.image} height="200px" />
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <div className="cardBody">
                        {this.state.synopsis}
                        <br />
                        {this.state.rating}
                    </div>
                </Card.Body>
                <Card.Footer> {/*inputted reviews should appear above reviewform, maybe even in card body?*/}
                    {/* <Stars /> */}
                    <ReviewForm />
                </Card.Footer>
            </Card>
        )
    }
    
}