import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
// import scrollview

const App = () => {
  return(
    // menggunakan scroll
    <ScrollView>
      <View style={styles.wrapper}>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'yellow'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'blue'}}>INI GAMBAR ANDROID</Text>
        {/* ini memanggil image secara local yang berada di folder assets */}
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/1.png')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'green'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is work from home</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/2.png')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'black'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is smile</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/3.png')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'purple'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is programing </Text>
        {/* ini memanggil image secara global yang ada di internet */}
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={{uri: 'https://reactjs.org/logo-og.png'}}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'yellow'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is Graduation</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/1.png')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'green'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is work from home</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/2.png')}/>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = {
  wrapper : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red' 
  }
}

export default App;