import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentArea from './CommentArea';

const MainCardHarryPotter = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://www.omdbapi.com/?apikey=48f5e168&s=harry%20potter');
                setMovies(response.data.Search || []);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const handleCardClick = (asin) => {
        setSelectedMovie(asin);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };

    return (
        <Container className="mt-5">
            <h1 className="text-start mb-4">Harry Potter</h1>
            <Carousel>
                {movies.reduce((rows, movie, index) => {
                    if (index % 5 === 0) {
                        rows.push([]);
                    }
                    rows[rows.length - 1].push(movie);
                    return rows;
                }, []).map((row, rowIndex) => (
                    <Carousel.Item key={rowIndex}>
                        <Row className='d-flex justify-content-center'>
                            {row.map((movie) => (
                                <Col key={movie.imdbID} md={2}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img
                                            variant="top"
                                            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                                            alt={movie.Title}
                                            onClick={() => handleCardClick(movie.imdbID)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CommentArea asin={selectedMovie} />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleCloseModal}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default MainCardHarryPotter;
