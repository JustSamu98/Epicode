import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react';
import SingleCard from './SingleCard';
import data from '../data/scifi.json';

const Main = () => {

    /*const getProductData = async () => {
        try {
            const Data = await fetch("https://dummyjson.com/products");
            return await Data.json();
        } catch (error) {
            if(error) throw new Error("Azz! Male qua!");
        }
    }
    useEffect(() => {
        getProductData().then(res => console.log(res));
    },[]);*/

  return (
    <Container className='mt-5 mb-5'>
        <Row>
            <Col sm={12} className='d-flex flex-wrap gap-3 justify-content-center'>
                {data.map((item) =>{
                    return (
                        <SingleCard
                            title={item.title}
                            img={item.img}
                            asin={item.asin}
                            price={item.price}
                            category={item.category}
                        />
                    )
                })}
            </Col>
        </Row>
    </Container>
  )
}

export default Main