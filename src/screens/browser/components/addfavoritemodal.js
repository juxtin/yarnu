import React, { Component } from 'react';
import {
  SafeAreaView,
  Modal,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

import R from 'res/R';
import GlobalStyles from 'constants/globalstyles';

const win = Dimensions.get('window');

export default class AddFavoriteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      strTitle: this.props.title,
      strUrl: this.props.url,
      screenTitle: this.props.screenTitle,
    }

    this.mTitleInput = null;
    this.mUrlInput = null;
  }

  _onChangeTitleText = (text) => {
    this.setState({
      strTitle: text,
    })
  }

  _onChangeUrlText = (text) => {
    this.setState({
      strUrl: text,
    })
  }

  _onPressSave = () => {
    if (this.state.strTitle.trim() == '') {
      alert('Please input valid title!')
      return
    }
    if (this.state.strUrl.trim() == '') {
      alert('Please input valid url!')
      return
    }

    this.props.pressAddFavoriteItem(this.state.strTitle, this.state.strUrl)
  }

  render() {
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={this.props.modalVisible}>
        <View style={styles.modalWrapper}>
          <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={{flex: 1, backgroundColor: 'lightgrey', }}>
              <View style={styles.modalHeader}>
                <TouchableOpacity style={styles.btnCancel} onPress={this.props.pressHide}>
                  <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.titleText}>{this.state.screenTitle}</Text>
                <TouchableOpacity style={styles.btnSave} onPress={this._onPressSave}>
                  <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputWrapper}>
                <Image style={{ width: 24, height: 24, marginLeft: 20, marginRight: 20, }} source={R.images.icon_favorites_inactive} />
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={r => (this.mTitleInput = r)}
                    style={{ flex: 1,}}
                    multiline={false}
                    keyboardType='default'
                    returnKeyType='done'
                    onChangeText={this._onChangeTitleText}
                    value={this.state.strTitle}
                  />
                  <View style={{height: 1, backgroundColor: 'lightgrey'}}></View>
                  <TextInput
                    ref={r => (this.mSearchTextView = r)}
                    style={{ flex: 1,}}
                    multiline={false}
                    keyboardType='web-search'
                    returnKeyType='done'
                    onChangeText={this._onChangeUrlText}
                    value={this.state.strUrl}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalWrapper: {
    width: win.width,
    height: win.height,
    backgroundColor: 'white',
  },
  modalHeader: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  btnCancel: {
    position: 'absolute',
    left: 0,
    marginLeft: 12,
  },
  btnSave: {
    position: 'absolute',
    right: 0,
    marginRight: 12,
  },
  btnText: {
    color: 'blue'
  },
  titleText: {
    position: 'absolute',
    left: win.width / 2 - 100,
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputWrapper: {
    height: 60,
    marginTop: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    height: 60,
  },
});

