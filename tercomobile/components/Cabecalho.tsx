import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Terço Mariano</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3CB371',
  },
});
