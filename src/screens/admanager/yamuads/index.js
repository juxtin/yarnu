import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';
import { TextInput } from 'react-native-gesture-handler';

export default class AdManangerYamuAds extends Component {

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressNext = () => {
    this.props.navigation.navigate('AdManagerYamuAds2');
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
            <View style={{alignSelf: 'center', marginTop: 30, marginBottom: 30,}}>
              <View style={{flexDirection: 'row',}}>
                <View style={styles.greenDot}></View>
                <View style={styles.dashLine}></View>
                <View style={styles.greenDot}></View>
                <View style={styles.dashLine}></View>
                <View style={styles.emptyDot}></View>
              </View>
            </View>
            <TouchableOpacity style={styles.uploadContainer}>
              <Image style={styles.imgUpload} source={R.images.icon_upload_black} />
              <View style={styles.uploadFooter}>
                <Text style={{color: 'white',}}>Edit</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.txtUpload}>Upload your Logo</Text>
            <TextInput placeholder='Business Name' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 30,}}></TextInput>
            <TextInput placeholder='Phone Number' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <TextInput placeholder='Company URL' placeholderTextColor={'#979797'} style={{...styles.textInput, marginTop: 10,}}></TextInput>
            <Text style={styles.txtDescription}>By clicking „Next“, I represent and warrant{'\n'}that I am authorized to submit this request{'\n'}on behalf of Business</Text>
            <TouchableOpacity style={styles.btnNext} onPress={this._onPressNext}>
              <Text style={styles.btnTitle}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}