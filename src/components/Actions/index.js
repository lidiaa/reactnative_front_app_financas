import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
//importar icones
import { AntDesign } from '@expo/vector-icons'


export default function Actions() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}> 
                <AntDesign name='addfolder' size={26} color={"#000"}/>
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}> 
                <AntDesign name='tagso' size={26} color={"#000"}/>
            </View>
            <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}> 
                <AntDesign name='creditcard' size={26} color={"#000"}/>
            </View>
            <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}> 
                <AntDesign name='barcode' size={26} color={"#000"}/>
            </View>
            <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}> 
                <AntDesign name='setting' size={26} color={"#000"}/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },

    areaButton:{
        backgroundColor: "#ECF0F1",
        height: 60,
        width: 60,
        borderRadius: 60/2,
        justifyContent: 'center',
        alignItems: 'center'

    },

    actionButton:{
        alignContent: 'center',
        marginRight: 32,
    },

    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})