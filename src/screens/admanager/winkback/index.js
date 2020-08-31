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
      winkArray : [
        {title: 'www.adidas.com', isAdd: false, },
        {title: 'www.jdsports.com', isAdd: false, },
        {title: '', isAdd: true, },
      ],
      cashbackArray : [],
      otherCashbackArray : [],
      textValue: '5% Cashback',
      otherTextValue: '1 Heart',
    };
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  _onPressApply = () => {
  }

  _onPressDown = () => {
    this.setState({
      otherCashbackArray: [],
    })
    if (this.state.cashbackArray.length > 0) {
      this.setState({
        cashbackArray: [],
      })
    } else {
      this.setState({
        cashbackArray: [
          {title: '5% Cashback', },
          {title: '10% Cashback', },
          {title: '15% Cashback', },
          {title: '20% Cashback', },
          {title: '25% Cashback', },
        ],
      })
    }
  }

  _onPressOtherDown = () => {
    this.setState({
      cashbackArray: [],
    })
    if (this.state.otherCashbackArray.length > 0) {
      this.setState({
        otherCashbackArray: [],
      })
    } else {
      this.setState({
        otherCashbackArray: [
          {title: '1 Heart', },
          {title: '2 Hearts', },
          {title: '3 Hearts', },
          {title: '4 Hearts', },
          {title: '5 Hearts', },
        ],
      })
    }
  }

  renderListItem = (item, index) => {
    if (index == this.state.winkArray.length-1) {
      return (
        <TouchableOpacity style={{marginLeft: 12, height: 55, justifyContent: 'center',}}>
          <Image style={{width: 24, height: 24, }} source={R.images.icon_add_black} />
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.listItem}>
          <Text style={styles.listText}>{item.title}</Text>
          <TouchableOpacity style={styles.listFooterButton}>
            <Image style={{width: 20, height: 20, }} source={R.images.icon_favorites_inactive} />
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.homeHeader}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image style={styles.imgBack} width={13} height= {24} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Wink back product</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
            <Text style={{marginTop: 24, marginBottom: 20, marginLeft: 12, marginRight: 12, }}>Offer a little more eco cashback and{'\n'}appear directly on your competitors websites{'\n'}to attract customers about to purchase.</Text>
            <Autocomplete
              style={{ zIndex: 100 }} 
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              listContainerStyle={styles.listContainerStyle}
              listStyle={styles.listStyle}
              data={this.state.cashbackArray}
              renderTextInput={() => (
                <View style={{flexDirection: 'row',}}>
                  <View style={styles.viewHeart}>
                    <Image style={styles.imgHeart} source={R.images.icon_heart_empty} />
                  </View>
                  <TextInput editable={false} style={styles.textInput} value={this.state.textValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_black} />
                  </TouchableOpacity>
                </View>
              )}
              renderItem={({ item, index }) => (
                  <TouchableOpacity id={index} style={styles.dropdownItem} onPress={() => {
                      this.setState({ textValue: item.title, cashbackArray: [] });
                    }
                  }>
                    <Text style={{marginLeft: 10,}}>{item.title}</Text>
                  </TouchableOpacity>
                )
              }
            />
            <View style={{...styles.viewMenu, marginTop: 35,}}>
              <Text>Add competitor website URLs below</Text>
            </View>
            {this.state.winkArray.map((item, index) => this.renderListItem(item, index))}
            <View style={{...styles.viewMenu, marginTop: 10, }}>
              <Text>Instant Karma!</Text>
            </View>
            <Text style={{marginTop: 12, marginLeft: 12, marginRight: 12, }}>Offer a little instant heart payment{'\n'}for each click through</Text>
            <Autocomplete
              style={{ zIndex: 100, }} 
              containerStyle={{...styles.containerStyle, marginTop: 18,}}
              inputContainerStyle={styles.inputContainerStyle}
              listContainerStyle={styles.listContainerStyle}
              listStyle={styles.listStyle}
              data={this.state.otherCashbackArray}
              renderTextInput={() => (
                <View style={{flexDirection: 'row',}}>
                  <View style={styles.viewHeart}>
                    <Image style={styles.imgHeart} source={R.images.icon_heart_empty} />
                  </View>
                  <TextInput editable={false} style={styles.textInput} value={this.state.otherTextValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressOtherDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_black} />
                  </TouchableOpacity>
                </View>
              )}
              renderItem={({ item, index }) => (
                  <TouchableOpacity id={index} style={styles.dropdownItem} onPress={() => {
                      this.setState({ otherTextValue: item.title, otherCashbackArray: [] });
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
            <View style={styles.viewFooter}>
              <TouchableOpacity style={styles.btnLaunch} onPress={this._onPressLaunch}>
                <Text style={{color: 'white'}}>Apply wink back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
