import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerBilling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyArray: [
        {title: 'Adidas', type: 0, isActive: true},
        {title: 'Sneakers', type: 1, isActive: false},
      ],
    };
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.homeHeader}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image
              style={styles.imgBack}
              width={13}
              height={24}
              source={R.images.icon_leftarrow_black}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Billing</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
            <View style={styles.viewMenu}>
              <Text>Select payment method</Text>
            </View>
            <View style={styles.viewCountry}>
              <Text style={{marginLeft: 20}}>Billing Country</Text>
              <View style={{flex: 1}} />
              <Text style={{marginRight: 20, color: '#979797'}}>
                United Kingdom {'>'}
              </Text>
            </View>
            <View style={styles.viewMenu}>
              <Text>Add a payment method to your ad account</Text>
            </View>
            <TouchableOpacity
              style={{
                ...styles.viewMethod,
                borderBottomColor: '#D8D8D8',
                borderBottomWidth: 1,
              }}>
              <Text style={{marginLeft: 20}}>Credit or Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewMethod}>
              <Text style={{marginLeft: 20}}>Paypal</Text>
            </TouchableOpacity>
            <View style={{...styles.viewMenu, flexDirection: 'row'}}>
              <Text>Your payment info is stored securely.</Text>
              <TouchableOpacity>
                <Text style={{marginLeft: 5, textDecorationLine: 'underline'}}>
                  Learn more
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
