import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JetBrainsMono_800ExtraBold,
  Inter_400Regular,
  Poppins_400Regular_Italic
  } from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    JetBrainsMono_800ExtraBold,
    Inter_400Regular,
    Poppins_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Melhores ferramentas de estilzação</Text>
        <FlatList
          data={arrayGear}
          renderItem={({ item }) =>
            <View>
              <Text style={styles.second}>
                {item.Gear} - {item.ano}
              </Text>
              <Image src={item.img}>
              </Image>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  titulo: {
    marginVertical: 20,
    fontSize: 40,
    color: '#6940cf',
    fontFamily: 'JetBrainsMono_800ExtraBold',
    fontWeight: 'bolder',
  },
});

const arrayGear = [
  {
    Gear: 'Sass',
    ano: '2006',
    func: 'Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.',
    img: require('./assets/sass.gif')
  },
  {
    Gear: 'BootStrap',
    ano: '2009',
    func: 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.',
    img: require('./assets/bootstrap-stack.png')
  },
  {
    Gear: 'Tailwind',
    ano: '2019',
    func: "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
    img: require('./assets/wind.avif')
  },
];
