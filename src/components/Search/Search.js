import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./Search.style";

const Search = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder="Ara..." placeholderTextColor={"grey"} style={styles.text_input}/>
        </View>
    )
}

export default Search;


