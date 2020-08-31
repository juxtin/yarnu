import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManagerSurveyFinal extends Component {
  constructor(props) {
    super(props);
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { isHot, } = this.props.route.params;
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.homeHeader}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image style={styles.imgBack} width={13} height= {24} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Survey{'\n'}Final Ad</Text>
        </View>
        <View style={styles.rootWrapper}>
          <View style={styles.adContent}>
            <View style={styles.adEarn}>
              <Text style={{color: 'white', marginLeft: 3,}}>Earn</Text>
              <Image style={{width: 25, height: 21, marginLeft: 5, marginRight: 5,}} source={R.images.icon_heart_empty} />
              <Text style={{color: 'white', marginRight: 3,}}>25</Text>
            </View>
            <View style={styles.adImage}></View>
            <Text style={{color: 'red', marginTop: 20,}}>Here will be adidas image</Text>
            <Text style={styles.txtHot}>{isHot ? 'Hot or not:\nRate our newest sneaker model!' : 'Questionaire:\nLet us quiz you about our sneakers!'}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
