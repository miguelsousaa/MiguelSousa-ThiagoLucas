import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EscolherMisterio({
  onEscolher,
}: {
  onEscolher: (tipo: string) => void;
}) {
  const opcoes = ['Gozosos', 'Dolorosos', 'Gloriosos', 'Luminosos'];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha o Mistério</Text>
      {opcoes.map((opcao) => (
        <TouchableOpacity
          key={opcao}
          style={styles.botao}
          onPress={() => onEscolher(opcao)}
        >
          <Text style={styles.botaoTexto}>{opcao}</Text>
        </TouchableOpacity>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 16,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
