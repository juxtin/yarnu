import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerReachback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      durationArray : [],
      durationTextValue: '1 day',
      untilArray : [],
      untilTextValue: '22 Jul 2020',
      heartArray : [],
      heartTextValue: '1 Heart',
      urlValue: '',
    };
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressApply = () => {
  }

  _onPressHeartDown = () => {
    this.setState({
      cashbackArray: [],
      trainerArray : [],
      otherCashbackArray: [],
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
          <Text style={styles.headerTitle}>Reach back ad</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
            <Text style={{marginTop: 24, marginLeft: 40, marginRight: 40, textAlign: 'center',}}>Send an ad to those that have visited your competitor but haven’t purchased</Text>
            <View style={{...styles.viewMenu, marginTop: 20, }}>
              <Text>Upload media</Text>
            </View>
            <TouchableOpacity style={styles.viewUpload}>
              <Image style={styles.imgUpload} source={R.images.icon_upload_black} />
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', }}>Add your campaign url</Text>
            <View style={styles.viewUrl}>
              <TextInput style={{width: '100%', paddingLeft: 10, paddingRight: 10, }} value={this.state.urlValue} onChangeText={(value) => this.setState({urlValue : value,})}></TextInput>
            </View>
            <View style={styles.viewMenu}>
              <Text>Instant Karma!</Text>
            </View>
            <Text style={{marginTop: 24, marginBottom: 24, marginLeft: 12, marginRight: 12, }}>Offer a little instant heart payment{'\n'}for each purchase</Text>
            <Autocomplete
              style={{ zIndex: 100, }} 
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
            <View style={{...styles.viewMenu, marginTop: 10, marginBottom: 24}}>
              <Text>Additional options</Text>
            </View>
            <View style={styles.viewAdditional}>
              <Text style={styles.textAdditional}>Location:</Text>
              <View style={styles.addiContent}>
                <Text>London SW 1TW</Text>
                <TouchableOpacity>
                  <Image style={styles.addiClose} source={R.images.icon_input_delete} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.textAddmore}>+ Add more</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewAdditional}>
              <Text style={styles.textAdditional}>Interest:</Text>
              <View style={styles.addiContent}>
                <Text>Sneakers</Text>
                <TouchableOpacity>
                  <Image style={styles.addiClose} source={R.images.icon_input_delete} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.textAddmore}>+ Add more</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewAdditional}>
              <Text style={styles.textAdditional}>Age range:</Text>
              <View style={styles.addiContent}>
                <Text>16-20</Text>
                <TouchableOpacity>
                  <Image style={styles.addiClose} source={R.images.icon_input_delete} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.textAddmore}>+ Add more</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewAdditional}>
              <Text style={styles.textAdditional}>Sex:</Text>
              <View style={styles.addiContent}>
                <Text>Male</Text>
                <TouchableOpacity>
                  <Image style={styles.addiClose} source={R.images.icon_input_delete} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.textAddmore}>+ Add more</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{...styles.btnApply, marginTop: 50,}} onPress={this._onPressLaunch}>
              <Text style={{color: 'white'}}>Save changes</Text>
            </TouchableOpacity>
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
                <Text style={{color: 'white'}}>Launch reach back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
