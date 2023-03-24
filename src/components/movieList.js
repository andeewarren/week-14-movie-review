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
                   title: 'The Notebook',
                   image: 'https://i5.walmartimages.com/asr/79a0acec-8031-4c87-b7f7-53db246fb0cd_1.b3020eee6cd4eb8a439bae6c7fe45dee.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
                   synopsis: 'A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.',
                   rating: 'PG-13'}
            } />
            <Movie {...
                {id: 3,
                   title: 'The Notebook',
                   image: 'https://i5.walmartimages.com/asr/79a0acec-8031-4c87-b7f7-53db246fb0cd_1.b3020eee6cd4eb8a439bae6c7fe45dee.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
                   synopsis: 'A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.',
                   rating: 'PG-13'}
            } />
        </div>
        )
    }
}