import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerLoginWith extends Component {

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressLogin = () => {
    this.props.navigation.navigate('AdManagerLogin');
  }

  _onPressRegister = () => {
    this.props.navigation.navigate('AdManagerSignup');
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
            <Text style={styles.txtTitle}>YAMU AD MANAGER</Text>
            <TouchableOpacity style={styles.btnLogin} onPress={this._onPressLogin}>
              <Text style={styles.btnTitle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegister} onPress={this._onPressRegister}>
              <Text style={styles.btnTitle}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}