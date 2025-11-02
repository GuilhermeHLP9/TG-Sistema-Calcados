import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Colors } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';
import { loginStyles } from '../styles/loginStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha email e senha');
      return;
    }

    setLoading(true);
    
    try {
      console.log('Login:', email, senha);
      
      setTimeout(() => {
        Alert.alert('Sucesso', 'Login realizado!');
        navigation.replace('Home');
      }, 1000);
      
    } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={globalStyles.centerContent}>
        <Text style={loginStyles.title}>Sistema de Gestão</Text>
        <Text style={loginStyles.subtitle}>Pedidos Calçadista</Text>

        <View style={loginStyles.form}>
          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={Colors.textLight}
          />

          <TextInput
            style={globalStyles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            placeholderTextColor={Colors.textLight}
          />

          <TouchableOpacity
            style={[
              globalStyles.primaryButton,
              loading && globalStyles.buttonDisabled
            ]}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={globalStyles.primaryButtonText}>
              {loading ? 'Entrando...' : 'ENTRAR'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.linkButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={globalStyles.linkText}>
              Não tem conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}