import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

//tipando o onPress
//type ButtonProps = TouchableOpacityProps  //primeira forma de definicao do tipo, pegando toda a propriedade do TouchableOpacityProps

interface ButtonProps extends TouchableOpacityProps {  //segunda forma de definicao do tipo, pegando todo a propriedade do TouchableOpacityProps e colocando a mais alguns elementos
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {  //pega o onPress do Home.js, ...rest=pega todas as propriedades do onPress(handleAddNewSkill)
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}