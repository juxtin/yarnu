import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';
import { TextInput } from 'react-native-gesture-handler';

export default class AdManangerYamuAds2 extends Component {

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressStart = () => {
    this.props.navigation.navigate('AdManagerOnboarding');
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>YAMU ADS</Text>
            <TouchableOpacity style={styles.viewLogout} onPress={this._onPressBack}>
              <Text style={{color: 'white',}}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{alignSelf: 'center', marginTop: 30, }}>
              <View style={{flexDirection: 'row',}}>
                <View style={styles.greenDot}></View>
                <View style={styles.dashLine}></View>
                <View style={styles.greenDot}></View>
                <View style={styles.dashLine}></View>
                <View style={styles.greenDot}></View>
              </View>
            </View>
            <Text style={{...styles.txtTitle, marginTop: 24, fontSize: 18,}}>We need some extra{'\n'}information</Text>
            <Text style={{...styles.txtTitle, marginTop: 20, fontSize: 14,}}>Where do you do your business</Text>
            <TextInput placeholder='Country' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 30,}}></TextInput>
            <TextInput placeholder='Postal Code' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TextInput placeholder='Location within this area' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TextInput placeholder='Category' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <Text style={{...styles.txtTitle, marginTop: 24, fontSize: 14,}}>What currency do you use?</Text>
            <TextInput placeholder='GBP' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 20, marginBottom: 22, }}></TextInput>
            <TouchableOpacity style={styles.btnStart} onPress={this._onPressStart}>
              <Text style={styles.btnTitle}>Get started!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}