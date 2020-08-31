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
  viewCountry: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
  },
  viewMethod: {
    height: 58,
    justifyContent: 'center',
  },
});
