import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';
import { TextInput } from 'react-native-gesture-handler';

export default class AdManangerSignup extends Component {

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressSignup = () => {
    this.props.navigation.navigate('AdManagerYamuAds');
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={this._onPressBack}>
              <Image style={styles.imgBack} source={R.images.icon_leftarrow_black} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>SIGN UP</Text>
          </View>
          <View>
            <View style={{alignSelf: 'center', marginTop: 30, marginBottom: 30,}}>
              <View style={{flexDirection: 'row',}}>
                <View style={styles.greenDot}></View>
                <View style={styles.dashLine}></View>
                <View style={styles.emptyDot}></View>
                <View style={styles.dashLine}></View>
                <View style={styles.emptyDot}></View>
              </View>
            </View>
            <Text style={styles.txtTitle}>Let’s get started{'\n'}and create your account!</Text>
            <TextInput placeholder='First Name' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 30,}}></TextInput>
            <TextInput placeholder='Last Name' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TextInput placeholder='Email' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TextInput secureTextEntry={true} placeholder='Password' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <Text style={styles.txtDescription}>By tapping “Sign Up & Accept”, {'\n'}you acknowledge that you have read{'\n'}the Privacy Policy and agree{'\n'}to the Terms of Service.</Text>
            <TouchableOpacity style={styles.btnSignup} onPress={this._onPressSignup}>
              <Text style={styles.btnTitle}>Sign Up & Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}