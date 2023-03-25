//adds review to list
import React from 'react';
import ReviewList from './reviewList';

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

    handleSubmit = () => { //something is updating one entry behind
        this.setState({ 
            reviews: [...this.state.reviews, this.state.indReview] 
        })
        console.log(this.state.reviews);
        this.setState({
            indReview: '', //doesn't reset textbox - does it need to be a form?
        })
        console.log('check submit ran') //runs
    }

    render() {
        return ( //TODO: check if form allows input box reset; will have to add prevent default to submit
            <div>
            <ReviewList enteredReview={this.state.reviews} />
            <div>
                <h3>Review Form</h3>
                <input type='textarea' placeholder='Enter your review here' rows={3} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Submit Review</button>
            </div>
            
            </div>
        )
    }
}