import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const List = [
  {
    id: 1,
    label: "Boleto de conta de luz",
    value: '300,90',
    date: '17/02/2024',
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pix cliente José",
    value: '1.020,00',
    date: '12/02/2024',
    type: 1, //entradas
  },
  {
    id: 3,
    label: "Aluguel",
    value: '1.000,00',
    date: '11/02/2024',
    type: 0, //despesas
  },
  
]


export default function Home() {
  return (
    <View style={styles.container}>
      <Header nameUser="Lidia Silva"/>
      <Balance saldo="9.123,22" gastos="1.300.90"/>
      <Actions></Actions>
      <Text style={styles.title}>Ultimas movimentações</Text>
      <FlatList style={styles.list} data={List}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false} renderItem={({item}) => <Moviments data={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list:{
    marginStart: 14,
    marginEnd: 14,
  }


});


