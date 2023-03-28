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
            
            <Card className="movieCard">
                <Card.Img className="image" variant="top" src={this.state.image} height="200px" />
                <Card.Body>
                    <Card.Title id='title'><br />{this.state.title}</Card.Title>
                    <div className="cardBody">
                        <br />Rated {this.state.rating} <br />
                        <br />{this.state.synopsis}
                        <br />
                    </div>
                </Card.Body>
                <Card.Footer> {/*inputted reviews should appear above reviewform, maybe even in card body?*/}
                    {/* <Stars /> */}
                    <br /><ReviewForm />
                </Card.Footer>
            </Card>
        )
    }
    
}