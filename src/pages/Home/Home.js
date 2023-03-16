//pagina principal
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { SkillCard } from "../../components/SkillCard/SkillCard";

export function Home() {

  const [newSkill, setNewSkill] = useState('');  //armazena as novas skills
  const [mySkills, setMySkills] = useState([]);  //armazena todas as skills

  //handle = é uma convensão, para quando a função é disparada por uma interação do usuário
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])  //oldState = estado anterior, pode ser qualquer nome, setMySkills=pega tudo do ...oldState mais o newSkill
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo, Felipe</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}
        //passa para o componente Button a funcao handleAddNewSkill
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (  //percorre toda mySkills, colocando o resultado do handleAddNewSkill em skill
          <SkillCard skill={skill} 
            //passa para o componente SkillCard os valores recebidos de skill
          />
        ))
      }
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