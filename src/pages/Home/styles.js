import { StyleSheet } from "react-native"
import { Platform } from "react-native"

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  texto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    marginTop: 30,
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,  //caso seja ios sera de 15, se for android será de 10
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
})