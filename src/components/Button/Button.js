import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

export function Button({ onPress }) {  //pega o onPress do Home.js
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}