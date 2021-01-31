import React from 'react'

var someObj = {
    movie:'Tenet',
    director: 'Christopher Nolan',
    genre: 'Sci Fi'
}

const SpreadOperatorDemonstration = (props) => {
    const{movie,director,genre} = props
    return (
        <div>
         <h3>I just watched {movie}</h3>
         <h3>It was directed by {director}</h3>
         <h3>And its genre is {genre}</h3>          
        </div>
    )
}

const Spreader = () => {
    return <SpreadOperatorDemonstration key={1} {...someObj}></SpreadOperatorDemonstration>
}

export default Spreader
