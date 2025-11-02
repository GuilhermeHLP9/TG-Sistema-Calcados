import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export const homeStyles = StyleSheet.create({
  newOrderButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    marginBottom: 24,
    gap: 8,
  },
  newOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cardDate: {
    fontSize: 14,
    color: Colors.textLight,
  },
});