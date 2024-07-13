import { Text, View ,TouchableOpacity, StyleSheet} from "react-native"

const Header = () => {
    return (
        <View >
            <TouchableOpacity style={style.container}>

            <Text>Headder</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
      backgroundColor : '#fff',
      flex:1
    }

  })

export default Header;