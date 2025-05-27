import { View, Text, StyleSheet } from 'react-native';

export default function TelaOracao({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 16,
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
});
