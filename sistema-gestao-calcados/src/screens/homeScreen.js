import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';
import { homeStyles } from '../styles/homeStyles';

export default function HomeScreen({ navigation }) {
  const pedidos = [
    { id: 1, numero: '2025-001', status: 'EM_PRODUCAO', valor: 2500 },
    { id: 2, numero: '2025-002', status: 'NOVO', valor: 1800 },
  ];

  const getStatusColor = (status) => {
    const colors = {
      NOVO: Colors.novo,
      EM_PRODUCAO: Colors.emProducao,
      CONCLUIDO: Colors.concluido,
      RECUSADO: Colors.recusado,
    };
    return colors[status] || Colors.textLight;
  };

  const getStatusText = (status) => {
    const texts = {
      NOVO: 'Aguardando',
      EM_PRODUCAO: 'Em Produção',
      CONCLUIDO: 'Concluído',
      RECUSADO: 'Recusado',
    };
    return texts[status] || status;
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>Meus Pedidos</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={globalStyles.content}>
        <TouchableOpacity
          style={homeStyles.newOrderButton}
          onPress={() => Alert.alert('Em breve', 'Tela de novo pedido')}
        >
          <Ionicons name="add-circle" size={24} color="#fff" />
          <Text style={homeStyles.newOrderText}>Novo Pedido</Text>
        </TouchableOpacity>

        <Text style={globalStyles.sectionTitle}>Pedidos Ativos</Text>

        {pedidos.map((pedido) => (
          <TouchableOpacity
            key={pedido.id}
            style={globalStyles.card}
            onPress={() => Alert.alert('Pedido', `#${pedido.numero}`)}
          >
            <View style={homeStyles.cardHeader}>
              <Text style={homeStyles.cardNumber}>#{pedido.numero}</Text>
              <View
                style={[
                  homeStyles.statusBadge,
                  { backgroundColor: getStatusColor(pedido.status) + '20' }
                ]}
              >
                <Text
                  style={[
                    homeStyles.statusText,
                    { color: getStatusColor(pedido.status) }
                  ]}
                >
                  {getStatusText(pedido.status)}
                </Text>
              </View>
            </View>

            <Text style={homeStyles.cardValue}>
              R$ {pedido.valor.toFixed(2)}
            </Text>

            <View style={homeStyles.cardFooter}>
              <Ionicons name="time-outline" size={16} color={Colors.textLight} />
              <Text style={homeStyles.cardDate}>Hoje, 14:30</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}