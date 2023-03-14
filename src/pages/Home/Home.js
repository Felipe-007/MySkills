import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Bem Vindo, Felipe</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.texto, { marginTop: 20 }]}>
        My Skills
      </Text>
    </View>
  )
}

/**
 * export defaut function Home
 * ou
 * export function Home quando houver mais de uma exportação no mesmo arquivo
 * 
 * oq é exportado por dafaut não fica entre {}
 * oq é exportado por const fica entre {}
 */