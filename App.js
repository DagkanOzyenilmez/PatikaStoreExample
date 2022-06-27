import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

// Components
import CardItem from "./src/components/CardItem/CardItem";
import Search from "./src/components/Search";

// Product Data
import productData from './src/data/product-data.json'

const App = () => {

  const renderItems = ({item}) => <CardItem products={item}/>

  return(
    <SafeAreaView style={styles.contaier}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <FlatList
      ListHeaderComponent={()=> <Search/>}
      keyExtractor={(item) =>item.id.toString()}
      numColumns={2}
      data={productData}
      renderItem={renderItems}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  contaier:{
    flex:1,
  },
  header:{
    fontWeight: 'bold',
    fontSize: 30,
    padding:10,
    color:'purple'
  }
})

export default App;