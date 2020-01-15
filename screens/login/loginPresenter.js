import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import backgroundImg from '../../assets/img/loginPic.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBox from '../../components/TextInput';

const {width, height} = Dimensions.get('window');

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImg}
          style={{width: width, height: height}}>
          <View style={styles.loingTop}>
            <Icon
              name="ios-chatboxes"
              size={40}
              color="white"
              style={{marginRight: 20}}
            />
            <Text style={styles.txt}>SIGN IN</Text>
          </View>
          <View style={styles.loingDown}>
            <View style={styles.inputContainer}>
              <InputBox />
            </View>

            <View>
              <Text>Forget Your Password ? </Text>
            </View>

            <View>
              <Text>SIGN UP</Text>
              <Text>SIGN IN</Text>
            </View>

            <View>
              <Text>Devleop Team 4leaf </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loingTop: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: width / 6,
  },
  loingDown: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#0b0b0b',
    opacity: 0.9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  txt: {
    fontSize: 30,
    color: '#fff',
  },
  txt2: {
    marginTop: 30,
    fontSize: 30,
    color: '#fff',
  },
  inputContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Login;
