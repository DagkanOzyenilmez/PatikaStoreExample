import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%', 
    },
    inner_container: {
        padding: 10,
    },
    title :{
        fontWeight: 'bold',
        fontSize: 15,
    },
    price: {
        fontWeight: 'bold',
        color: 'grey',
        marginTop : 3,
    }, 
    stock: {
        fontWeight: 'bold',
        color: 'red',
        marginTop : 3,
    },
    product_name: {
        color: 'red',
        fontSize: 10,
    },
});

export default styles;