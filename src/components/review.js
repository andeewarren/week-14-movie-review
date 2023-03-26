//build a card with submitted review and star rating?
//one singular review that gets added to list through form

import React from "react";
import Stars from "./stars";

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