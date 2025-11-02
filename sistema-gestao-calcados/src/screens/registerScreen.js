import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Colors } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';
import { registerStyles } from '../styles/registerStyles';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('CLIENTE');

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      console.log('Cadastro:', { nome, email, telefone, tipoUsuario });
      Alert.alert('Sucesso', 'Cadastro realizado!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao cadastrar');
    }
  };

  return (
    <ScrollView style={registerStyles.container}>
      <View style={registerStyles.content}>
        <Text style={registerStyles.title}>Criar Conta</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Nome completo *"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor={Colors.textLight}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Email *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={Colors.textLight}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          placeholderTextColor={Colors.textLight}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Senha *"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor={Colors.textLight}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Confirmar senha *"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          placeholderTextColor={Colors.textLight}
        />

        <Text style={globalStyles.label}>Tipo de usuário:</Text>
        <View style={registerStyles.radioGroup}>
          <TouchableOpacity
            style={[
              registerStyles.radioButton,
              tipoUsuario === 'CLIENTE' && registerStyles.radioButtonActive
            ]}
            onPress={() => setTipoUsuario('CLIENTE')}
          >
            <Text style={[
              registerStyles.radioText,
              tipoUsuario === 'CLIENTE' && registerStyles.radioTextActive
            ]}>
              Cliente
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              registerStyles.radioButton,
              tipoUsuario === 'PROPRIETARIO' && registerStyles.radioButtonActive
            ]}
            onPress={() => setTipoUsuario('PROPRIETARIO')}
          >
            <Text style={[
              registerStyles.radioText,
              tipoUsuario === 'PROPRIETARIO' && registerStyles.radioTextActive
            ]}>
              Proprietário
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={handleRegister}
        >
          <Text style={globalStyles.primaryButtonText}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.linkButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.linkText}>
            Já tem conta? Faça login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}