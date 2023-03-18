//pagina principal
import { View, Text, TextInput, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { SkillCard } from "../../components/SkillCard/SkillCard";

export function Home() {

  const [newSkill, setNewSkill] = useState('');  //armazena as novas skills
  const [mySkills, setMySkills] = useState([]);  //armazena todas as skills
  const [greetins, setGreetins] = useState('');

  //handle = é uma convensão, para quando a função é disparada por uma interação do usuário
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])  //oldState = estado anterior, pode ser qualquer nome, setMySkills=pega tudo do ...oldState mais o newSkill
  }

  //será executado assim que abrir o aplicativo
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetins('Bom dia');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreetins('Boa tarde');
    }
    else {
      setGreetins('Boa noite');
    }
  }, []);  //[]aqui fica a dependencia ex:mySkills ou qualquer outra const

  return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Bem Vindo, Felipe</Text>

        <Text style={styles.greetins}>
          {greetins}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill}
        //passa para o componente Button a funcao handleAddNewSkill
        />

        <Text style={[styles.title, { marginVertical: 30 }]}>
          My Skills
        </Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item}  //percorre toda mySkills, colocando o resultado do handleAddNewSkill em skill
          renderItem={({ item }) => (
            <SkillCard skill={item} />  //skill={item}=passa para o componente SkillCard os valores recebidos de skill
          )}
        />
      </SafeAreaView>
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