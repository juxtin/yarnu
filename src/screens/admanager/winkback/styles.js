import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get('window');
const ratio = win.width / 375;

export default StyleSheet.create({
  rootScrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeHeader: {
    width: '100%',
    height: 100,
    backgroundColor: '#72C500',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgBack: {
    marginLeft: 20,
  },
  headerTitle: {
    position: 'absolute',
    left: (win.width / 2) - 100,
    width: 200,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  viewMenu: {
    height: 40,
    backgroundColor: 'rgba(114,197,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    height: 55,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  listText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  listFooterButton: {
    marginRight: 15,
  },
  containerStyle: {
    alignSelf: 'center',
    width: 350 * ratio,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 8,
  },
  inputContainerStyle: {
    borderWidth: 0,
    height: 50,
  },
  listContainerStyle: {
  },
  listStyle: {
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 2,
  },
  textInput: {
    flex: 1,
    height: 50,
    alignSelf: 'center',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
  viewHeart: {
    width: 55,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4600',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  imgHeart: {
    width: 26,
    height: 22,
  },
  imgDown: {
    width: 26,
    height: 22,
  },
  dropdownItem: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'center',
  },
  viewDelay: {
    width: 350 * ratio,
    alignSelf: 'center',
    marginTop: 18,
    marginBottom: 18,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  },
  textDelay: {
    marginBottom: 5,
  },
  viewCheckbox: {
    flexDirection: 'row',
    marginLeft: 17,
    marginTop: 20,
    alignItems: 'center',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 12,
  },
  viewFooter: {
    height: 78,
    marginTop: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(114,197,0,0.2)',
  },
  btnLaunch: {
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#72C500',
  },
});
