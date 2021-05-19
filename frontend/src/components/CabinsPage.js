import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Image, Text, Button, Input, Select } from "@chakra-ui/react";

import LoadingSpinner from './LoadingSpinner';

const CabinsPage = () => {
    const [cabins, setCabins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCabins = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`http://localhost:5000/api/cabins`);
                setCabins(data.cabins);
                console.log(cabins);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        };
        fetchCabins();
    }, []);


    return (
        <div>
            <Flex justifyContent="center">
                <Select placeholder="Search by" w="15%" mx={3} my={3}>
                    <option value="option1">Location</option>
                    <option value="option2">Price</option>
                    <option value="option3">Beds</option>
                </Select>
                <Input placeholder="Search cabins" size="md" w="40%" mx={3} my={3} />
                <Button colorScheme="blue" my={3}>Search</Button>
            </Flex>

            <Text fontSize="4xl" align="center">Our Cabins</Text>
            <Text fontSize="xl" align="center">{cabins.length} cabins for rent</Text>

            {loading && <LoadingSpinner />}

            {cabins.length > 0 && cabins.map(cabin => {
                return (
                    <Box my={5} mx="auto" bg="lightgray" w="60%" p={5} color="black">
                        <Flex>
                            <Image
                                w="33%"
                                objectFit="cover"
                                src={cabin.image}
                                alt={cabin.name} />
                            <Flex w="66%" justifyContent="space-around">
                                <div>
                                    <Text fontSize="2xl">{cabin.name}</Text>
                                    <h3>{cabin.address.city}, {cabin.address.state}</h3>
                                </div>
                                <div>
                                    <h2>${cabin.pricePerNight} per night</h2>
                                    <h3>{cabin.beds} bedrooms</h3>
                                    <h3>{cabin.baths} bathrooms</h3>
                                </div>
                            </Flex>
                        </Flex>
                        <Button colorScheme="blue" my={3}>Book now</Button>
                    </Box>
                );
            })}

        </div>
    );
};

export default CabinsPage;
