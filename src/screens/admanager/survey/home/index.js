import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

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
      durationArray : [],
      durationTextValue: '1 day',
      untilArray : [],
      untilTextValue: '22 Jul 2020',
      urlValue: '',
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

  _onPressDurationDown = () => {
    this.setState({
      untilArray: [],
    })
    if (this.state.durationArray.length > 0) {
      this.setState({
        durationArray: [],
      })
    } else {
      this.setState({
        durationArray: [
          {title: '1 day', },
          {title: '2 days', },
          {title: '3 days', },
          {title: '4 days', },
          {title: '5 days', },
        ],
      })
    }
  }

  _onPressUntilDown = () => {
    this.setState({
      durationArray: [],
    })
    if (this.state.untilArray.length > 0) {
      this.setState({
        untilArray: [],
      })
    } else {
      this.setState({
        untilArray: [
          {title: '22 Jul 2020', },
          {title: '23 Jul 2020', },
          {title: '24 Jul 2020', },
          {title: '25 Jul 2020', },
          {title: '26 Jul 2020', },
        ],
      })
    }
  }

  _onPressLaunch = () => {
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
            <Image style={styles.imgBack} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Survey</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
            <Text style={{marginTop: 24, marginLeft: 12, marginBottom: 28, }}>Create a survey for your customers to gain{'\n'}better insights</Text>
            <View style={styles.viewMenu}>
              <Text>Upload media</Text>
            </View>
            <View style={styles.viewUpload}>
              <Image style={styles.imgUpload} source={R.images.icon_upload_black} />
            </View>
            <Text style={{alignSelf: 'center', }}>Add your campaign url</Text>
            <View style={styles.viewUrl}>
              <TextInput style={{width: '100%', paddingLeft: 10, paddingRight: 10, }} value={this.state.urlValue} onChangeText={(value) => this.setState({urlValue : value,})}></TextInput>
            </View>
            <View style={styles.viewMenu}>
              <Text>Choose a style</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this._onPressHot}>
              <Text style={{color: 'white'}}>Hot or Not</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this._onPressQuestionaire}>
              <Text style={{color: 'white'}}>Top Question</Text>
            </TouchableOpacity>
            <View style={{...styles.viewMenu, marginTop: 20,}}>
              <Text>My current surveys</Text>
            </View>
            {this.state.surveyArray.map((item, index) => this.renderSurveyItem(item, index))}
            <View style={{...styles.viewMenu, marginTop: 20, marginBottom: 20, }}>
              <Text>Campaign settings</Text>
            </View>
            <Text style={{marginLeft: 15, marginBottom: 20, fontSize: 14,}}>Campaign budget</Text>
            <View style={styles.budgetWrapper}>
              <View style={styles.budgetItemWrapper}>
                <Text style={{flex: 1, marginLeft: 10, color: 'black', }}>Daily budget</Text>
                <Image style={{width: 13, height: 10, marginLeft: 10, marginRight: 10,}} source={R.images.icon_downarrow_fullblack} />
              </View>
              <View style={styles.budgetItemWrapper}>
                <Text style={{flex: 1, marginLeft: 10, color: 'black', }}>£100.00</Text>
                <Text style={{marginLeft: 10, marginRight: 10, color: 'black', }}>GBP</Text>
              </View>
            </View>
            <Text style={{marginLeft: 15, marginTop: 5, marginBottom: 10, fontSize: 12,}}>Actual amount spent per day may vary</Text>
            <Text style={{marginLeft: 15, marginTop: 5, marginBottom: 10, fontSize: 14,}}>Duration</Text>
            <Autocomplete
              style={{ zIndex: 100 }} 
              containerStyle={{...styles.containerStyle, zIndex: 300}}
              inputContainerStyle={styles.inputContainerStyle}
              listContainerStyle={styles.listContainerStyle}
              listStyle={styles.listStyle}
              data={this.state.durationArray}
              renderTextInput={() => (
                <View style={{flexDirection: 'row',}}>
                  <TextInput editable={false} style={styles.textInput} value={this.state.durationTextValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressDurationDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_fullblack} />
                  </TouchableOpacity>
                </View>
              )}
              renderItem={({ item, index }) => (
                  <TouchableOpacity id={index} style={styles.dropdownItem} onPress={() => {
                      this.setState({ durationTextValue: item.title, durationArray: [] });
                    }
                  }>
                    <Text style={{marginLeft: 10,}}>{item.title}</Text>
                  </TouchableOpacity>
                )
              }
            />
            <Text style={{marginLeft: 15, marginTop: 15, marginBottom: 10, fontSize: 14,}}>Run this campaign until</Text>
            <Autocomplete
              style={{ zIndex: 100 }} 
              containerStyle={{...styles.containerStyle, zIndex: 200}}
              inputContainerStyle={styles.inputContainerStyle}
              listContainerStyle={styles.listContainerStyle}
              listStyle={styles.listStyle}
              data={this.state.untilArray}
              renderTextInput={() => (
                <View style={{flexDirection: 'row',}}>
                  <TextInput editable={false} style={styles.textInput} value={this.state.untilTextValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressUntilDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_fullblack} />
                  </TouchableOpacity>
                </View>
              )}
              renderItem={({ item, index }) => (
                  <TouchableOpacity id={index} style={styles.dropdownItem} onPress={() => {
                      this.setState({ untilTextValue: item.title, untilArray: [] });
                    }
                  }>
                    <Text style={{marginLeft: 10,}}>{item.title}</Text>
                  </TouchableOpacity>
                )
              }
            />
            <Text style={{marginLeft: 15, marginTop: 15, marginBottom: 60, fontSize: 14,}}>You will spend a total of £10.00. This campaign{'\n'}will run for 5 days, ending Jul 22, 2020.</Text>
            <View style={styles.viewFooter}>
              <TouchableOpacity style={styles.btnApply} onPress={this._onPressLaunch}>
                <Text style={{color: 'white'}}>Launch survey</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
