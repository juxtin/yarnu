import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerSurveyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyArray : [
        {title: 'Adidas', type: 0, isActive: true, },
        {title: 'Sneakers', type: 1, isActive: false, },
      ],
    };
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressHot = () => {
    this.props.navigation.navigate('AdManagerSurveyHot');
  }

  _onPressQuestionaire = () => {
    this.props.navigation.navigate('AdManagerSurveyQuestionaire');
  }

  _onPressSurveyItemEdit = (index) => {
  }

  _onPressSurveyItemActive = (index) => {
    let tempArray = [...this.state.surveyArray]
    tempArray[index].isActive = !tempArray[index].isActive
    this.setState({
      surveyArray: tempArray,
    });
  }

  renderSurveyItem = (item, index) => {
    return (
      <View style={styles.surveyItem}>
        <View style={styles.surveyHeader}>
        </View>
        <View style={styles.surveyContent}>
          <Text style={styles.surveyText}>{item.title}</Text>
          <Text style={styles.surveyText}>{item.type == 0 ? 'Hot or Not?' : 'Questionaire'}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
            <View style={item.isActive ? styles.activeDot : styles.deactiveDot}></View>
            <Text style={{flex: 1, fontSize: 10,}}>{item.isActive ? 'Active' : 'Inactive'}</Text>
          </View>
        </View>
        <View style={styles.surveyFooterButton}>
          <TouchableOpacity onPress={this._onPressSurveyItemEdit.bind(this, index)}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <Text style={{marginLeft: 5, marginRight: 5,}}>|</Text>
          <TouchableOpacity onPress={this._onPressSurveyItemActive.bind(this, index)}>
            <Text>{item.isActive ? 'De-activate' : 'Activate'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.homeHeader}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image style={styles.imgBack} width={13} height= {24} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Survey</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
            <Text style={{marginTop: 24, marginLeft: 12, marginBottom: 28, }}>Create a survey for your customers to gain{'\n'}better insights</Text>
            <View style={styles.viewMenu}>
              <Text>Create a new survey</Text>
            </View>
            <View style={styles.viewUpload}>
              <View style={{alignItems: 'center',}}>
                <Text>Upload picture here</Text>
                <Image style={styles.imgUpload} source={R.images.icon_upload_black} />
              </View>
            </View>
            <View style={styles.viewMenu}>
              <Text>Choose a style</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this._onPressHot}>
              <Text style={{color: 'white'}}>Hot or Not</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this._onPressQuestionaire}>
              <Text style={{color: 'white'}}>Questionaire</Text>
            </TouchableOpacity>
            <View style={{...styles.viewMenu, marginTop: 20,}}>
              <Text>My current surveys</Text>
            </View>
            {this.state.surveyArray.map((item, index) => this.renderSurveyItem(item, index))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
