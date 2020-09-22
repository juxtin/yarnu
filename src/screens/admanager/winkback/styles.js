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
    height: 70,
    backgroundColor: '#72C500',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgBack: {
    marginLeft: 20,
    width: 13,
    height: 24,
  },
  headerTitle: {
    position: 'absolute',
    left: (win.width / 2) - 100,
    width: 200,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  viewMenu: {
    height: 40,
    backgroundColor: 'rgba(114,197,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginLeft: 20,
    marginRight: 20,
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
    borderColor: '#D8D8D8',
    borderRadius: 8,
    marginRight: 12,
  },
  viewFooter: {
    height: 78,
    marginTop: 35,
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
  budgetWrapper: {
    width: 350 * ratio,
    height: 40,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  budgetItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 8,
  },
});
