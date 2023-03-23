import { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';

import { formatNumber } from './formatarNumero';

import { Sacar } from './sacar';

import { Depositar } from './depositar';

const logoSantander =
  'https://logosmarcas.net/wp-content/uploads/2020/11/Santander-Logo.png';

const iconeDinheiro =
  'https://o.remove.bg/downloads/e98dd246-de62-491d-9227-a7aa510b54e9/icone-dinheiro-removebg-preview.png';

export default function App() {
  const [valorInput, setValorInput] = useState(null);

  const [saldo, setSaldo] = useState(7320.92);

  const saldoFormatado = formatNumber(saldo);

  const sacarValor = () => {
    if (valorInput === null || valorInput <= 0) {
      alert('[ERRO] Valor inválido!');

      setValorInput(null);
    } else {
      let sacar = new Sacar(saldo, Number(valorInput));

      setSaldo(sacar.sacarDinheiro());

      setValorInput(null);

      Keyboard.dismiss();
    }
  };

  const depositarValor = () => {
    if (valorInput === null || valorInput <= 0) {
      alert('[ERRO] Valor inválido!');

      setValorInput(null);
    } else {
      let depositar = new Depositar(saldo, Number(valorInput));
      
      setSaldo(depositar.depositarDinheiro());

      setValorInput(null);

      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: logoSantander }} />

      <Text style={styles.txtSaldo}>SALDO ATUAL NA CONTA</Text>

      <Text style={styles.saldo}>R$ {saldoFormatado}</Text>

      <Text style={styles.descricaoPreInput}>
        Digite o valor abaixo e escolha uma das operações bancárias:
      </Text>

      <View style={styles.viewFlex}>
        <Image style={styles.iconeDinheiro} source={{ uri: iconeDinheiro }} />

        <TextInput
          style={styles.input}
          placeholder="0,00"
          keyboardType="numeric"
          onChangeText={setValorInput}
          value={valorInput}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={sacarValor}>
        <Text style={styles.txtBotao}>SACAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={depositarValor}>
        <Text style={styles.txtBotao}>DEPOSITAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },

  logo: {
    width: 300,
    height: 100,
    marginBottom: 40,
  },

  txtSaldo: {
    color: 'rgb(196, 196, 196)',
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: 15,
  },

  saldo: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 50,
  },

  descricaoPreInput: {
    fontSize: 17,
    paddingLeft: '10%',
    paddingRight: '10%',
    textAlign: 'center',
    marginBottom: 15,
  },

  viewFlex: {
    flexDirection: 'row',
  },

  iconeDinheiro: {
    width: 35,
    height: 20,
    marginTop: 25,
  },

  input: {
    height: 50,
    width: '75%',
    margin: 12,
    borderWidth: 2.5,
    padding: 10,
    borderBottomColor: 'rgb(110, 110, 110)',
    borderTopColor: 'rgb(221, 221, 221)',
    borderLeftColor: 'rgb(221, 221, 221)',
    borderRightColor: 'rgb(221, 221, 221)',
    backgroundColor: 'rgb(221, 221, 221)',
    marginBottom: 45,
  },

  botao: {
    width: '85%',
    padding: 18,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
    elevation: 5,
  },

  txtBotao: {
    color: 'white',
    fontSize: 14,
  },
});
