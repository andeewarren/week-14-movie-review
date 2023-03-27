//build a card with submitted review and star rating?
//one singular review that gets added to list through form

//reviewForm submits to Review which feeds to review list! this is how to combine text input and star rating into one component before getting added to the list as a whole


import React from "react";
import Stars from "./stars";
import ReviewForm from "./reviewForm";

export default class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            starRating: props.starRating
        }
    }



    render() {
        return(
            <div>
                
            </div>
        )
    }
}