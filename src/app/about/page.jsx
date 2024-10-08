import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
    <div className='max-w-6xl mx-auto p-3 space-y-4 text-justify'>
        <h1 className='text-2xl font-medium text-amber-500'>About</h1>
        <p>IMDb (Internet Movie Database) is an extensive online database of information related to films, television programs, home videos, video games, and streaming content online. It includes details about cast, production crew, plot summaries, trivia, ratings, reviews, and more. Here’s a detailed breakdown of the various aspects you can find on </p>
        <h3 className='text-1xl font-medium text-amber-500'> Key Features of IMDb Movies Information:</h3>
        <p>
       
Title and Basic Information:

Title: The name of the movie.
Release Date: The official release date of the movie.
Duration: The length of the movie.
Genres: Categories like Action, Comedy, Drama, etc.
Rating: IMDb’s rating based on user reviews, typically on a scale of 1 to 10.
Plot and Synopsis:

Plot Summary: A brief overview of the movie’s storyline.
Synopsis: A more detailed description of the movie’s plot.
Cast and Crew:

Actors: The main cast and their roles.
Director: The person who directed the movie.
Writers: Screenwriters and story writers.
Producers: Individuals who produced the movie.
Cinematographers: People responsible for the film's photography.
Detailed Cast Information:

Actor Profiles: Links to profiles of the actors which include their filmography and other personal details.
Character Descriptions: Information about the characters played by the actors.
Production Details:

Studios: Companies that produced the movie.
Budget: The financial budget of the movie.
Box Office: Earnings from the movie, both domestically and internationally.
Reviews and Ratings:

User Reviews: Reviews submitted by IMDb users.
Critic Reviews: Reviews from professional critics.
Metascore: A weighted average of critic reviews.
User Ratings: The overall rating given by IMDb users.
Multimedia:

Trailers and Clips: Official trailers and clips from the movie.
Photos: Stills from the movie, behind-the-scenes photos, and promotional material.
Awards and Nominations:

Awards: Information on awards won by the movie.
Nominations: Nominations for various awards the movie has received.
Trivia and Fun Facts:

Trivia: Interesting facts and lesser-known information about the movie.
Goofs: Mistakes and continuity errors spotted in the movie.
Quotes: Memorable quotes from the movie.
Related Content:

</p>
    </div>
    <Footer />
    </div>
  )
}

export default page