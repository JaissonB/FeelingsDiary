import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: theme.color_white,
    backgroundColor: theme.color_dark,
  },
  input: {
    fontFamily: 'Inter-Regular',
    color: '#ffffff',
    width: '80%',
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 18,
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 24,
  },
  button: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Inter-Bold',
  },
  registerText: {
    fontSize: 14,
    marginTop: 8,
    color: '#ffffff',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Inter-Regular',
  },
});

export default styles;
