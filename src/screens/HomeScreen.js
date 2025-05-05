import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import {LineChart} from "react-native-chart-kit";
import TransactionList from "./TransactionList";

const HomeScreen = ({ navigation }) => {
  const [balance, setBalance] = useState(1500.0);
  const [transacoes, setTransations] = useState([
    { id: "1", type: "Receita", category: "Salário", amount: 1500 },
    { id: "2", type: "Despesa", category: "Alimentação", amount: -250 },
    { id: "3", type: "Despesa", category: "Transporte", amount: -300 },
    { id: "4", type: "Despesa", category: "Lazer", amount: -300 },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>
        <Text style={styles.category}>{item.category}</Text> - {item.type}:{" "}
        <Text style={item.amount < 0 ? styles.expense : styles.income}>
          R${item.amount.toFixed(2)}
        </Text>
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Saldo Total */}
      <Text style={styles.balanceText}>Saldo Total: R${balance.toFixed(2)}</Text>
      {/* Grafico */}
      <LineChart
       data= {{
        labels:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago"],
        datasets:[
          {data:[1500,1300,1250,1600,1332,1800,1400,1290]}
        ]
       }}
       width = {Dimensions.get("window").width-20}
       height = {200}
       yAxisLabel = "R$"
       chartConfig={{
        backgroundGradientFrom:"#fff",
        backgroundGradientTo:"#fff",
        decimalPlaces:2,
        color: (opacity = 1) => `rgba(63, 59, 61, ${opacity})`,
       }}
       style = {styles.chart}
      />



      {/* Lista de transações com FlatList */}
      <TransactionList  transacoes={transacoes}/> 



      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Transações")}>
          <AntDesign name="plus" size={50} color={"black"}/>
       </TouchableOpacity>
    </View>
  );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  balanceText: {
    textAlign: "center",
    fontSize: 19,
    marginBottom: 0,
    fontWeight: "bold"
  },
  transactionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  transactionText: {
    fontSize: 16,
  },
  category: {
    fontWeight: "bold",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
  chart: {
    borderRadius:15,
    marginVertical:20,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#808080",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  }
});

export default HomeScreen;