//adds review to list
import React from 'react';
import ReviewList from './reviewList';
import { Form } from 'react-bootstrap';
import Stars from './stars';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        indReview: '',
        reviews: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            indReview: e.target.value,
        })
        // console.log('check handleChange runs') it runs and prints to console for every letter entered wtf?
    }

    handleSubmit = (event) => { //something is updating one entry behind
        event.preventDefault();
        this.setState({ 
            reviews: [...this.state.reviews, this.state.indReview], 
        });
        console.log(this.state.reviews);
        
        this.setState({
            indReview: '', //doesn't reset textbox - does it need to be a form?
        });
        console.log('check submit ran') //runs
    }

    render() {
        return ( //TODO: check if form allows input box reset; will have to add prevent default to submit
            <div>
            <ReviewList enteredReview={this.state.reviews} enteredStar={this.state.starRate} />
            <div>
                <Form className="reviewForm">
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" placeholder="Share your thoughts here" rows={3} value={this.state.indReview} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Stars name="simple-controlled" />
                    </Form.Group>
                    <div>
                        <button onClick={this.handleSubmit}>Submit Review</button>
                    </div>
                </Form>



                {/* <h3>Review Form</h3>
                <input type='textarea' placeholder='Enter your review here' rows={3} onChange={this.handleChange}></input> */}
                
            </div>
            
            </div>
        )
    }
}