import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';
import { TextInput } from 'react-native-gesture-handler';

export default class AdManangerLogin extends Component {

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressLogin = () => {
    this.props.navigation.navigate('AdManagerOnboarding');
  }

  _onPressForgot = () => {
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image style={styles.imgBack} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <View>
            <Image style={styles.imgYamuLogo} source={R.images.img_yamu_logo} />
            <Text style={styles.txtTitle}>LOGIN</Text>
            <TextInput placeholder='Username' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 48,}}></TextInput>
            <TextInput secureTextEntry={true} placeholder='Password' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TouchableOpacity style={styles.btnLogin} onPress={this._onPressLogin}>
              <Text style={styles.btnTitle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressForgot}>
              <Text style={styles.txtForgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}