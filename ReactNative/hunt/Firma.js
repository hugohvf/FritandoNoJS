

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Plataform,
} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the firma</Text>
        <View style={styles.box}><Text>BE FIBADO</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#00ced1',
  },
  box: {
    width: 97,
    height: 60,
    backgroundColor: '#00ced1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import React from 'react';

// import {
//   Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
// } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   fileName: {
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   instructions: {
//     color: '#DDD',
//     fontSize: 14,
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   logo: {
//     height: Dimensions.get('window').height * 0.11,
//     marginVertical: Dimensions.get('window').height * 0.11,
//     width: Dimensions.get('window').height * 0.11 * (1950 / 662),
//   },
//   welcome: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// const Main = () => (
//   <ImageBackground
//     source={{
//       uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
//     }}
//     style={styles.container}
//     resizeMode="cover"
//   >
//     <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
//     <Image
//       source={{
//         uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
//       }}
//       style={styles.logo}
//       resizeMode="contain"
//     />
//     <Text style={styles.welcome}>Bem-vindo ao Template Básico!</Text>
//     <Text style={styles.instructions}>Essa é a tela principal da sua aplicação =)</Text>
//     <Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
//     <Text style={[styles.instructions, styles.fileName]}>src/pages/Main/index.js</Text>
//   </ImageBackground>
// );

// export default Main;