//lists all reviews
//array of reviews added to by review form
import React from "react";
// import Stars from "./stars";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    

    render() {
    
    return(
        <div>
            {this.props.enteredReview.map((review, i) => 
                <div key={i}>
                    <p>User Review: {review}</p>
                    </div>
            )}
            {/* <Stars /> */}

        </div>
    )
    }
};

//not printing unless i change the code and save it