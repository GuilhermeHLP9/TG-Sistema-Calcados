import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export const loginStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 48,
  },
  form: {
    width: '100%',
  },
});