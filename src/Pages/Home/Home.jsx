import React from "react";
import request from "../../utlis/Request";
import Navbar from '../../Component/Navbar/Navbar'
import Row from "../../Component/Row/Row";
import Banner from "../../Component/Banner/Banner";
import './Home.css'

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default Home;
