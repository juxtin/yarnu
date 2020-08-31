import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts'

import GlobalStyles from 'constants/globalstyles';
import styles from './styles';
import R from 'res/R';

export default class AdManangerYamuWidget extends Component {
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

  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.homeHeader}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image style={styles.imgBack} width={13} height= {24} source={R.images.icon_leftarrow_black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Yamu Widget</Text>
        </View>
        <ScrollView style={styles.rootScrollView}>
          <View>
            <Text style={{marginTop: 30, marginLeft: 22, marginBottom: 40, }}>Add this widget to your social icons on your{'\n'}website to show your support to your users!</Text>
            <PieChart style={{ height: 200 }} data={pieData} />
            <Text style={{marginTop: 40, marginLeft: 22, marginBottom: 10, }}>Copy code</Text>
            <View style={styles.viewCode}>
              <Text style={styles.textCode}>{"<"}code{">"}{"\n"}Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.{"\n"}{"<"}/code{">"}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
