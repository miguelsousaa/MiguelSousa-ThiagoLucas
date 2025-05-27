import { useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaOracao from './components/TelaOracao';
import Progresso from './components/Progresso';
import Botao from './components/Botao';
import EscolherMisterio from './components/EscolherMisterio';
import { oracoes } from './oracoes';

export default function App() {
  const [tipoMisterio, setTipoMisterio] = useState<string | null>(null);
  const [fase, setFase] = useState<'inicial' | 'misterio' | 'final'>('inicial');
  const [subfase, setSubfase] = useState<'normal' | 'gloria'>('normal');
  const [contadorAve, setContadorAve] = useState(0);
  const [indiceMisterio, setIndiceMisterio] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const avancar = () => {
    if (!tipoMisterio) return;

    if (fase === 'inicial') {
      if (contadorAve < 3) {
        setContadorAve(contadorAve + 1);
      } else if (subfase === 'normal') {
        setSubfase('gloria');
      } else {
        setFase('misterio');
        setContadorAve(0);
        setSubfase('normal');
      }
    } else if (fase === 'misterio') {
      if (contadorAve < 10) {
        setContadorAve(contadorAve + 1);
      } else if (subfase === 'normal') {
        setSubfase('gloria');
      } else {
        if (indiceMisterio < 4) {
          setIndiceMisterio(indiceMisterio + 1);
          setContadorAve(0);
          setSubfase('normal');
        } else {
          setFase('final');
        }
      }
    } else if (fase === 'final') {
      setFinalizado(true);
    }
  };

  const voltar = () => {
    if (fase === 'inicial') {
      if (subfase === 'gloria') {
        setSubfase('normal');
      } else if (contadorAve > 0) {
        setContadorAve(contadorAve - 1);
      }
    } else if (fase === 'misterio') {
      if (subfase === 'gloria') {
        setSubfase('normal');
      } else if (contadorAve > 0) {
        setContadorAve(contadorAve - 1);
      } else if (indiceMisterio > 0) {
        setIndiceMisterio(indiceMisterio - 1);
        setContadorAve(10);
        setSubfase('gloria');
      } else {
        setFase('inicial');
        setSubfase('gloria');
      }
    } else if (fase === 'final') {
      setFase('misterio');
      setFinalizado(false);
    }
  };

  const reiniciar = () => {
    setTipoMisterio(null);
    setFase('inicial');
    setContadorAve(0);
    setIndiceMisterio(0);
    setSubfase('normal');
    setFinalizado(false);
  };

  if (!tipoMisterio) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ADD8E6" />
        <Cabecalho />
        <EscolherMisterio onEscolher={(tipo) => setTipoMisterio(tipo)} />
      </View>
    );
  }

  let titulo = '';
  let texto = '';
  let progresso = '';

  if (fase === 'inicial') {
    if (subfase === 'gloria') {
      titulo = 'Glória';
      texto = oracoes.gloria;
      progresso = 'Rezando o Glória';
    } else if (contadorAve === 0) {
      titulo = 'Credo + Pai Nosso';
      texto = `${oracoes.credo}\n\n${oracoes.paiNosso}`;
      progresso = 'Início - Credo e Pai Nosso';
    } else {
      titulo = 'Ave Maria';
      texto = oracoes.aveMaria;
      progresso = `Ave Maria ${contadorAve} de 3`;
    }
  } else if (fase === 'misterio') {
    const lista = oracoes.misterios[tipoMisterio];
    if (subfase === 'gloria') {
      titulo = 'Glória';
      texto = oracoes.gloria;
      progresso = 'Rezando o Glória';
    } else if (contadorAve === 0) {
      titulo = 'Mistério';
      texto = lista[indiceMisterio];
      progresso = `Mistério ${indiceMisterio + 1} de 5`;
    } else {
      titulo = contadorAve === 1 ? 'Pai Nosso' : 'Ave Maria';
      texto = contadorAve === 1 ? oracoes.paiNosso : oracoes.aveMaria;
      progresso =
        contadorAve === 1
          ? `Pai Nosso do Mistério ${indiceMisterio + 1}`
          : `Ave Maria ${contadorAve - 1} de 10`;
    }
  } else if (fase === 'final') {
    if (!finalizado) {
      titulo = 'Salve Rainha';
      texto = oracoes.salveRainha;
      progresso = 'Encerramento';
    } else {
      titulo = 'Terço Finalizado';
      texto = 'Parabéns! Você completou o Terço';
      progresso = '';
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#ADD8E6" />
      <Cabecalho />
      <Progresso texto={progresso} />
      <TelaOracao titulo={titulo} texto={texto} />
      <View style={styles.botoes}>
        {!(fase === 'final' && finalizado) && (
          <Botao texto="Voltar" onPress={voltar} />
        )}
        <Botao texto="Avançar" onPress={avancar} />
      </View>
      <View style={styles.botaoEscolher}>
      <Botao texto="Escolher Mistério" onPress={reiniciar} />
      </View>
      {fase === 'final' && finalizado && (
        <View style={styles.botoes}>
          <Botao texto="Voltar aos Mistérios" onPress={reiniciar} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ADD8E6',
    padding: 24,
    justifyContent: 'center',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginVertical: 12,
  },
});
