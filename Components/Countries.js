import { View, Text, ScrollView, StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searched, setSearched] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                // setSearched(data);
                setCountries(data)
            });
    }, []);
    return (
        <View>
            <Text style={styles.header}>Countries:{countries.length}</Text>

            <TextInput
                // onChangeText={handleSearch}
                style={styles.input}
            ></TextInput>

            <ScrollView>
                {
                    countries.map(country => <Country

                        key={country.ccn3}
                        country={country}>



                    </Country>)

                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})