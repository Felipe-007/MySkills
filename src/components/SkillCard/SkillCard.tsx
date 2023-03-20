//texto adicionado
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface SkillCardProps extends TouchableOpacityProps {  //segunda forma de definicao do tipo, pegando todo a propriedade do TouchableOpacityProps e colocando a mais alguns elementos
  skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}