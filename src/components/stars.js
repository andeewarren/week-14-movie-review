//look for already coded star component on google/github!
import React from 'react';
import Bananas from '@mui/material/Rating';

export default class Stars extends React.Component {
    render() {
        return(
            <div>
                <Bananas precision={0.5} />

            </div>
        )
    }
}