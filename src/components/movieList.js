import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    //hold movie component
    render() {
        return(
        <div className='movieList'>
            <Movie {...
                {id: 1,
                   title: 'The Notebook',
                   image: 'https://i5.walmartimages.com/asr/79a0acec-8031-4c87-b7f7-53db246fb0cd_1.b3020eee6cd4eb8a439bae6c7fe45dee.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
                   synopsis: 'A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.',
                   rating: 'PG-13'}
            } />
            <Movie {...
                {id: 2,
                   title: 'John Wick',
                   image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71WiYBT2QsL._AC_UF894,1000_QL80_.jpg',
                   synopsis: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.',
                   rating: 'R'}
            } />
            <Movie {...
                {id: 3,
                   title: 'Deadpool',
                   image: 'https://i.ebayimg.com/images/g/PVsAAOSwrSdZgo8t/s-l500.jpg',
                   synopsis: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.',
                   rating: 'R'}
            } />
        </div>
        )
    }
}