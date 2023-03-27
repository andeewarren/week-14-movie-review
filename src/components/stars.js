//look for already coded star component on google/github!
import React from 'react';
import StarRating from '@mui/material/Rating';

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    
    render() {
        return(
            <div>
                <StarRating name="simple-stars" precision={0.5}  />

            </div>
        )
    }
}