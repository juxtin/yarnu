import React, { Component } from 'react';
import {
  Platform,
  Modal,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import R from 'res/R'

const win = Dimensions.get('window');
const ratio = win.width / 375;

export default class UpdateModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.textTitle}>Great! Let's update!</Text>
              <TouchableOpacity style={styles.btnClose} onPress={this.props.pressHide}>
                <Image style={{ width: 20, height: 20, alignSelf: 'flex-end', right: 10, top: 10, }} source={R.images.icon_close_white} />
              </TouchableOpacity>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.contentTitle}>Pay 1 Cent for{'\n'}the heart update.</Text>
              <View style={styles.viewHeart}>
                <View style={styles.heartItem}>
                  <View style={styles.itemContent}>
                    <Text style={styles.itemHeartText}>5 Hearts</Text>
                  </View>
                  <Text style={styles.itemPriceText}>£0.05</Text>
                </View>
                <View style={{...styles.heartItem, marginLeft: 20, marginRight: 20,}}>
                  <View style={styles.itemContent}>
                    <Text style={styles.itemHeartText}>25 Hearts</Text>
                  </View>
                  <Text style={styles.itemPriceText}>£0.25</Text>
                </View>
                <View style={styles.heartItem}>
                  <View style={styles.itemContent}>
                    <Text style={styles.itemHeartText}>50 Hearts</Text>
                  </View>
                  <Text style={styles.itemPriceText}>£0.50</Text>
                </View>
              </View>
              <Text style={styles.paypalTitle}>Please set up your{'\n'}billig</Text>
              <Text style={{color: 'red', marginTop: 20, }}>Here will be paypal image</Text>
              <TouchableOpacity style={styles.btnLogin} onPress={this.props.pressLogin}>
                <Text style={{color: 'white'}}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalWrapper: {
    width: win.width,
    height: win.height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: 320 * ratio,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeader: {
    width: 320 * ratio,
    height: 60,
    backgroundColor: '#72C500',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: 320 * ratio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnClose: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 40,
    height: 40,
  },
  contentTitle: {
    textAlign: 'center',
    marginTop: 20,
  },
  viewHeart: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  heartItem: {
    flex: 1,
    alignItems: 'center',
  },
  itemContent: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
  },
  itemHeartText: {
    fontSize: 10,
  },
  itemPriceText: {
    fontSize: 10,
    marginTop: 12,
    marginBottom: 30,
  },
  paypalTitle: {
    textAlign: 'center',
    marginTop: 20,
  },
  btnLogin: {
    width: 135,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#029CDE',
    marginTop: 20,
    marginBottom: 34,
  },
});

