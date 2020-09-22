import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerWinkback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartArray : [],
      heartTextValue: '1 Heart',
      durationArray : [],
      durationTextValue: '1 day',
      untilArray : [],
      untilTextValue: '22 Jul 2020',
    };
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressApply = () => {
  }

  _onPressHeartDown = () => {
    this.setState({
      durationArray: [],
      untilArray: [],
    })
    if (this.state.heartArray.length > 0) {
      this.setState({
        heartArray: [],
      })
    } else {
      this.setState({
        heartArray: [
          {title: '1 Heart', },
          {title: '2 Hearts', },
          {title: '3 Hearts', },
          {title: '4 Hearts', },
          {title: '5 Hearts', },
        ],
      })
    }
  }

  _onPressDurationDown = () => {
    this.setState({
      heartArray: [],
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
      heartArray: [],
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

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.homeHeader}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image style={styles.imgBack} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Wink back ad</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
          <Text style={{marginTop: 24, marginBottom: 70, marginLeft: 12, marginRight: 12, }}>Send a direct communication to those that have{'\n'}visited your competitors sites but not purchased</Text>
            <Text style={{marginBottom: 20, marginLeft: 12, marginRight: 12, }}>Offer a little instant heart payment{'\n'}for each click through</Text>
            <Autocomplete
              style={{ zIndex: 100 }} 
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              listContainerStyle={styles.listContainerStyle}
              listStyle={styles.listStyle}
              data={this.state.heartArray}
              renderTextInput={() => (
                <View style={{flexDirection: 'row',}}>
                  <View style={styles.viewHeart}>
                    <Image style={styles.imgHeart} source={R.images.icon_heart_white} />
                  </View>
                  <TextInput editable={false} style={styles.textInput} value={this.state.heartTextValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressHeartDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_fullblack} />
                  </TouchableOpacity>
                </View>
              )}
              renderItem={({ item, index }) => (
                  <TouchableOpacity id={index} style={styles.dropdownItem} onPress={() => {
                      this.setState({ heartTextValue: item.title, heartArray: [] });
                    }
                  }>
                    <Text style={{marginLeft: 10,}}>{item.title}</Text>
                  </TouchableOpacity>
                )
              }
            />
            <View style={styles.viewCheckbox}>
              <View style={styles.checkbox}></View>
              <Text>Not now, thanks!</Text>
            </View>
            <Text style={{marginTop: 24, marginLeft: 12, marginRight: 12, }}>Add optional keyword targeting</Text>
            <View style={styles.viewDelay}>
              <Text>#trainers #runningshoes #fashion</Text>
            </View>
            <View style={{...styles.viewMenu, marginBottom: 20, }}>
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
              <TouchableOpacity style={styles.btnLaunch} onPress={this._onPressLaunch}>
                <Text style={{color: 'white'}}>Launch wink back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
