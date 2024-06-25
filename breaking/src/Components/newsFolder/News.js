import React from 'react';
import {Button,Card} from 'react-bootstrap';
import news from './news.css';

const News = (props) => {
    const {title,description,url, urlToImage}=props.singleNews;
    return (
        <div>
            <Card>
                <Card.Header as="h5" className='header'><img src={urlToImage} alt="" /></Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" onClick={()=>window.open(url,'_blank')} >Details>> </Button>
                    
                </Card.Body>
            </Card>

        </div>
    );
};

export default News;