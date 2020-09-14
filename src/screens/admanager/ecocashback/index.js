import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerEcoCashback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ecoArray : [
        {title: 'Whole site', percent: 5, isActive: true, },
        {title: 'Sneakers', percent: 1, isActive: false, },
      ],
      cashbackArray : [],
      otherCashbackArray : [],
      textValue: '5% Cashback',
      otherTextValue: '1% Cashback',
      trainerArray : [],
      trainerTextValue: 'Trainers',
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
      trainerArray: [],
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
      trainerArray: [],
    })
    if (this.state.otherCashbackArray.length > 0) {
      this.setState({
        otherCashbackArray: [],
      })
    } else {
      this.setState({
        otherCashbackArray: [
          {title: '1% Cashback', },
          {title: '2% Cashback', },
          {title: '3% Cashback', },
          {title: '4% Cashback', },
          {title: '5% Cashback', },
        ],
      })
    }
  }

  _onPressTrainerDown = () => {
    this.setState({
      cashbackArray: [],
      otherCashbackArray: [],
    })
    if (this.state.trainerArray.length > 0) {
      this.setState({
        trainerArray: [],
      })
    } else {
      this.setState({
        trainerArray: [
          {title: 'Trainers', },
          {title: 'Trainers 02', },
          {title: 'Trainers 03', },
          {title: 'Trainers 04', },
          {title: 'Trainers 05', },
        ],
      })
    }
  }

  renderListItem = (item, index) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listHeader}>
        </View>
        <View style={styles.listContent}>
          <Text style={styles.listText}>{item.title}</Text>
          <Text style={styles.listText}>{item.percent + '% Cashback'}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
            <View style={item.isActive ? styles.activeDot : styles.deactiveDot}></View>
            <Text style={{flex: 1, fontSize: 10,}}>{item.isActive ? 'Active' : 'Inactive'}</Text>
          </View>
        </View>
        <View style={styles.listFooterButton}>
          <TouchableOpacity>
            <Text>Edit</Text>
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
          <Text style={styles.headerTitle}>Eco Cashback</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
            <Text style={{marginTop: 24, marginBottom: 28, textAlign: 'center', }}>Give a little back to the environment for every{'\n'}sale you make!</Text>
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
                    <Image style={styles.imgHeart} source={R.images.icon_heart_white} />
                  </View>
                  <TextInput editable={false} style={styles.textInput} value={this.state.textValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_fullblack} />
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
            <TouchableOpacity style={styles.button} onPress={this._onPressApply}>
              <Text style={{color: 'white'}}>Apply cashback</Text>
            </TouchableOpacity>
            <View style={{...styles.viewMenu, marginTop: 24,}}>
              <Text>Set cashback delay</Text>
            </View>
            <View style={styles.viewDelay}>
              <Text style={styles.textDelay}>1 day</Text>
              <Text style={styles.textDelay}>1 week</Text>
              <Text>4 weeks</Text>
            </View>
            <View style={{...styles.viewMenu, marginBottom: 20,}}>
              <Text>Apply different cashback on</Text>
            </View>
            <Autocomplete
              style={{ zIndex: 100 }} 
              containerStyle={{...styles.containerStyle, zIndex: 200}}
              inputContainerStyle={styles.inputContainerStyle}
              listContainerStyle={styles.listContainerStyle}
              listStyle={styles.listStyle}
              data={this.state.trainerArray}
              renderTextInput={() => (
                <View style={{flexDirection: 'row',}}>
                  <TextInput editable={false} style={styles.textInput} value={this.state.trainerTextValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressTrainerDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_fullblack} />
                  </TouchableOpacity>
                </View>
              )}
              renderItem={({ item, index }) => (
                  <TouchableOpacity id={index} style={styles.dropdownItem} onPress={() => {
                      this.setState({ trainerTextValue: item.title, trainerArray: [] });
                    }
                  }>
                    <Text style={{marginLeft: 10,}}>{item.title}</Text>
                  </TouchableOpacity>
                )
              }
            />
            <Autocomplete
              style={{ zIndex: 100, }} 
              containerStyle={{...styles.containerStyle, marginTop: 12,}}
              inputContainerStyle={styles.inputContainerStyle}
              listContainerStyle={styles.listContainerStyle}
              listStyle={styles.listStyle}
              data={this.state.otherCashbackArray}
              renderTextInput={() => (
                <View style={{flexDirection: 'row',}}>
                  <View style={styles.viewHeart}>
                    <Image style={styles.imgHeart} source={R.images.icon_heart_white} />
                  </View>
                  <TextInput editable={false} style={styles.textInput} value={this.state.otherTextValue}>
                  </TextInput>
                  <TouchableOpacity style={{alignSelf: 'center', marginRight: 12,}} onPress={this._onPressOtherDown}>
                    <Image style={styles.imgDown} source={R.images.icon_downarrow_fullblack} />
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
            <View style={{...styles.viewMenu, marginTop: 20,}}>
              <Text>Set cashback delay</Text>
            </View>
            <View style={styles.viewDelay}>
              <Text style={styles.textDelay}>1 day</Text>
              <Text style={styles.textDelay}>1 week</Text>
              <Text>4 weeks</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this._onPressApply}>
              <Text style={{color: 'white'}}>Apply cashback</Text>
            </TouchableOpacity>
            <View style={{...styles.viewMenu, marginTop: 20,}}>
              <Text>Add to sale confirmation page</Text>
            </View>
            <View style={styles.viewDelay}>
              <Text>www.yamu.track?17uze3ID=8787687687678…</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this._onPressApply}>
              <Text style={{color: 'white'}}>Copy code</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', marginTop: 34, }}>Make a dummy sale to see if the code work</Text>
            <Text style={{alignSelf: 'center', marginTop: 30, color: '#979797', }}>Tag code pending… </Text>
            <Text style={{alignSelf: 'center', marginTop: 24, }}>Tag detected and working!</Text>
            <View style={{...styles.viewMenu, marginTop: 38, marginBottom: 10, }}>
              <Text>My cashback campaigns</Text>
            </View>
            {this.state.ecoArray.map((item, index) => this.renderListItem(item, index))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
