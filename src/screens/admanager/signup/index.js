import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';
import { TextInput } from 'react-native-gesture-handler';

export default class AdManangerSignup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      strFirstName: '',
      strLastName: '',
      strEmail: '',
      strPassword: ''
    }

    this.mFirstName = null;
    this.mLastName = null;
    this.mEmail = null;
    this.mPassword = null;

  }

  _onChangeFirstName = (text) => {
    this.setState ({
      strFirstName: text
    })
  }

  _onChangeLasttName = (text) => {
    this.setState ({
      strLastName: text
    })
  }

  _onChangeEmail = (text) => {
    this.setState ({
      strEmail: text
    })
  }

  _onChangePassword = (text) => {
    this.setState ({
      strPassword: text
    })
  }
  
  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressSignup = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(this.state.strFirstName == '') {
      alert('Please input First Name!')
      return
    }

    if(this.state.strLastName == '') {
      alert('Please input Last Name!')
      return
    }

    if(this.state.strFirstName == '' || reg.test(this.state.strEmail) === false) {
      alert('Please input Valid Email!')
      return
    }

    if(this.state.strPassword == '') {
      alert('Please input Password!')
      return
    }

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
            <TextInput ref = {r => (this.mFirstName = r)} onChangeText={this._onChangeFirstName} value={this.state.strFirstName} placeholder='First Name' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 30,}}></TextInput>
            <TextInput ref = {r => (this.mLastName = r)} onChangeText={this._onChangeLasttName} value={this.state.strLastName} placeholder='Last Name' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TextInput ref = {r => (this.mEmail = r)} onChangeText={this._onChangeEmail} value={this.state.strEmail} placeholder='Email' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TextInput ref = {r => (this.mPassword = r)} onChangeText={this._onChangePassword} value={this.state.strPassword} secureTextEntry={true} placeholder='Password' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
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