import React, {useState} from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.length > 0 ?
                props.movies.map((movie, index) => (
                    <>
                        <div key={movie.id} className='col image-container d-flex justify-content-center m-3'>
                            <div className='d-flex flex-column tile'>
                                <div>
                                <img src={movie.posterurl} alt='movie' onClick={()=> props.handleMovieDetail(movie)}></img>
                                </div>
                                <div>
                                    {movie.title}
                                </div>
                                <div
                                    onClick={() => props.handleFavouritesClick(movie)}
                                    className='favbutton align-items-center justify-content-center'
                                >
                                    {<FavouriteComponent />}
                                </div>
                            </div>
                        </div> 
                         
                    </>
                ))
                : <div className='noDataStyle'> No Data found</div>
            }
        </>
    );
};

export default MovieList;