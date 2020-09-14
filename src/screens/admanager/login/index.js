import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerLogin extends Component {

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressLogin = () => {
    this.props.navigation.navigate('AdManagerHome');
  }

  _onPressRegister = () => {
    this.props.navigation.navigate('AdManagerHome');
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image style={styles.imgBack} width={13} height= {24} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <View>
            <Image style={styles.imgYamuLogo} width={144} height= {144} source={R.images.img_yamu_logo} />
            <Text style={styles.txtTitle}>YAMU FOR{'\n'}BUSINESS</Text>
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