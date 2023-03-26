//lists all reviews
//array of reviews added to by review form
import React from "react";
// import ReviewForm from "./reviewForm";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.reviews = props.enteredReview;
        console.log(this.reviews);
    }
    
    

    render() {
    return(
        <div>
            {this.reviews.map((review, i) => 
                <div key={i}>
                    <p>User Review: {review}</p>
                    </div>
            )}

        </div>
    )
    }
};

//not printing unless i change the code and save it