import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

import CashbackModal from './components/cashbackmodal';

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
      urlArray : [
        {title: 'www.adidas.com', isAdd: false, },
        {title: 'www.jdsports.com', isAdd: false, },
        {title: '', isAdd: true, },
      ],
      bTagCode : false,
      showCashbackModal: false,
      cashbackDelay : '1 day',
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

  _onPressDelayEdit = () => {
    this.setState({
      showCashbackModal: true,
    })
  }

  _onPressTagCode = () => {
    this.setState({
      bTagCode: !this.state.bTagCode,
    })
  }
  
  hideModal = () => {
    this.setState({
      showCashbackModal: false,
    });
  };

  _onPressDelayItem = (index) => {
    let delay
    switch (index) {
      case 0:
        delay = '1 day'
        break
      case 1:
        delay = '2 days'
        break
      case 2:
        delay = '3 days'
        break
      case 3:
        delay = '4 days'
        break
      case 4:
        delay = '5 days'
        break
      default:
        delay = this.state.cashbackDelay
        break
    }
    this.setState({
      showCashbackModal: false,
      cashbackDelay: delay,
    });
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

  renderURLListItem = (item, index) => {
    if (index == this.state.urlArray.length-1) {
      return (
        <TouchableOpacity style={{marginLeft: 12, height: 55, justifyContent: 'center',}}>
          <Image style={{width: 24, height: 24, }} source={R.images.icon_add_black} />
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.urlListItem}>
          <Text style={styles.urlListText}>{item.title}</Text>
          <TouchableOpacity style={styles.urlListFooterButton}>
            <Image style={{width: 14, height: 14, }} source={R.images.icon_close_black} />
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
            <Image style={styles.imgBack} source={R.images.icon_leftarrow_black} />
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
                    <Text>Edit</Text>
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
              <Text style={{flex: 1,}}>{this.state.cashbackDelay}</Text>
              <TouchableOpacity onPress={this._onPressDelayEdit}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{...styles.button, marginBottom: 20, }} onPress={this._onPressApply}>
              <Text style={{color: 'white'}}>Apply cashback</Text>
            </TouchableOpacity>
            <View style={styles.viewMenu}>
              <Text>Add competitor website URLs below</Text>
            </View>
            {this.state.urlArray.map((item, index) => this.renderURLListItem(item, index))}
            <View style={styles.viewMenu}>
              <Text>Add to sale confirmation page</Text>
            </View>
            <View style={{...styles.viewDelay, marginBottom: 0,}}>
              <Text>www.yamu.track?17uze3ID=87876…</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this._onPressApply}>
              <Text style={{color: 'white'}}>Copy code</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', marginTop: 34, textAlign: 'center', }}>Please make a dummy sale{'\n'}to see if the code works</Text>
            <TouchableOpacity style={this.state.bTagCode ? styles.selectedViewTag : styles.viewTag} onPress={this._onPressTagCode}>
              <Text style={this.state.bTagCode ? styles.selectedTxtTag : styles.txtTag}>{this.state.bTagCode ? 'Tag code works!' : 'Tag code pending...'}</Text>
            </TouchableOpacity>
            <View style={{...styles.viewMenu, marginTop: 20, marginBottom: 10, }}>
              <Text>My cashback campaigns</Text>
            </View>
            {this.state.ecoArray.map((item, index) => this.renderListItem(item, index))}
            <View style={{...styles.viewMenu, marginTop: 20, marginBottom: 20, }}>
              <Text>Campaign budget</Text>
            </View>
            <View style={styles.budgetWrapper}>
              <View style={styles.budgetItemWrapper}>
                <Text style={{flex: 1, marginLeft: 10, color: '#979797', }}>Daily budget</Text>
                <Image style={{width: 13, height: 10, marginLeft: 10, marginRight: 10,}} source={R.images.icon_downarrow_fullblack} />
              </View>
              <View style={styles.budgetItemWrapper}>
                <Text style={{flex: 1, marginLeft: 10, color: '#979797', }}>£100.00</Text>
                <Text style={{marginLeft: 10, marginRight: 10, color: '#979797', }}>GBP</Text>
              </View>
            </View>
            <Text style={styles.txtAmount}>Actual amount spend per day may vary</Text>
          </View>
        </ScrollView>
        {this.state.showCashbackModal ? (
          <CashbackModal
            modalVisible={this.state.showCashbackModal}
            pressHide={() => this.hideModal()}
            pressDelayItem={(index) => this._onPressDelayItem(index)}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}
