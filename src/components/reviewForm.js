import React from 'react';

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
        console.log('check handleChange runs')
    }

    handleSubmit = () => {
        this.setState({
            reviews: [...this.state.reviews, this.state.indReview]
        })
        this.setState({
            indReview: ''
        })
        console.log('check submit ran')
    }

    render() {
        return (
            <div>
                <h3>Review Form</h3>
                <input type='textarea' placeholder='Enter your review here' rows={3} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Submit Review</button>
            </div>
        )
    }
}