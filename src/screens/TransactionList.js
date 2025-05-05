import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";

export default function TransactionList ({transacoes}) {
    const renderItem = ({item})=> (
        <View>
            <View>
                <Text>
                    {item.descricao}
                </Text>
                <Text>
                    {item.tipo === 'receita'? '+': '-'} R${item.valor}
                </Text>
            </View>
                <Text>
                    {item.categoria}
                </Text>
        </View>
    )
    return (
        <FlatList
        data={transacoes}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id.toString()}
        ListEmptyComponent={<Text>
            Lista vazia
        </Text>
        }
    />
    )


}
