import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 32,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  radioButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  radioButtonActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight + '20',
  },
  radioText: {
    fontSize: 16,
    color: Colors.textLight,
  },
  radioTextActive: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});