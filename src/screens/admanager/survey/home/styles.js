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
  button: {
    width: 250,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#72C500',
    marginTop: 24,
  },
  viewUpload: {
    height: 150*ratio,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 14,
    marginBottom: 14,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgUpload: {
    marginTop: 24,
  },
  viewMenu: {
    height: 40,
    backgroundColor: 'rgba(114,197,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  surveyItem: {
    flexDirection: 'row',
    height: 80,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  surveyHeader: {
    width: 64,
    height: 64,
    marginLeft: 12,
    backgroundColor: '#D8D8D8'
  },
  surveyContent: {
    flex: 1,
    width: 64,
    height: 64,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'column',
  },
  surveyText: {
    flex: 1,
  },
  surveyFooterButton: {
    flexDirection: 'row',
    height:64,
    marginRight: 15,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#72C500',
    marginRight: 5,
  },
  deactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D8D8D8',
    marginRight: 5,
  },
});
