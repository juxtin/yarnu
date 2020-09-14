import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerSurveyQuestionaire extends Component {
  constructor(props) {
    super(props);
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressCool = () => {
  }

  _onPressLame = () => {
  }

  _onPressLaunch = () => {
    this.props.navigation.navigate('AdManagerSurveyFinal', { isHot: false });
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.homeHeader}>
          <Text style={styles.headerTitle}>Survey{'\n'}Questionaire</Text>
        </View>
        <View style={styles.rootWrapper}>
          <View style={{flexDirection: 'row', marginTop: 15,}}>
            <TouchableOpacity onPress={this._onPressBack}>
              <Image style={styles.imgBack} source={R.images.icon_leftarrow_back} />
            </TouchableOpacity>
            <View style={{flex: 1,}}></View>
            <TouchableOpacity onPress={this._onPressBack}>
              <Image style={styles.imgClose} source={R.images.icon_close_black} />
            </TouchableOpacity>
          </View>
          <View style={styles.surveyImage}>
            <Image source={R.images.img_product} />
          </View>
          <Text style={styles.txtQuestionaire}>What do you think about{'\n'}Adidas Superstars?</Text>
          <View style={styles.viewQuestionaire}>
            <TouchableOpacity style={styles.viewCool} onPress={this._onPressCool}>
              <Text style={{...styles.txtCool, color: '#72C500',}}>Cool!</Text>
            </TouchableOpacity>
            <View style={{width: 1, height: '100%', backgroundColor: '#D8D8D8',}}></View>
            <TouchableOpacity style={styles.viewCool} onPress={this._onPressLame}>
              <Text style={{...styles.txtCool, color: '#FF4600',}}>Lame!</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1,}}></View>
          <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.btnLaunch} onPress={this._onPressLaunch}>
              <Text style={{color: 'white'}}>Launch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
