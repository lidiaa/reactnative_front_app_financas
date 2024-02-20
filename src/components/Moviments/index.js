import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { MotiView, AnimatePresence, MotiText } from "moti";

export default function Moviments({data}) {

    //trabalhar com Estados - mutavel - esconder os valores da aplicação
    const [showValue, setShowValue] = useState(false)



 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        
        {showValue ? ( 
            <AnimatePresence exitBeforeEnter>
            <MotiText style={data.type === 1 ? styles.value : styles.expenses}
            from={{translateX: 100}} animate={{translateX: 0}} transition={{type: 'timing', duration: 500}}>
                {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`}
            </MotiText>
            </AnimatePresence>    
        ) : (
            <View style={styles.skeleton}>
            </View>
            
        )
    }

    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, //para ocpuar o valor inteiro da interface
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBlockColor: '#DADADA',
    },
    date:{
        color: '#DADADA',
        fontWeight: 'bold',
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1,
        marginBottom: 8,
    },
    value:{
        fontSize: 16,
        color: '#2ECC71',
       // fontWeight: 'bold',
    },
    label:{
        //fontWeight: 'bold',
        fontSize: 16,
    },
    expenses:{ //renderização condicional
        fontSize: 16,
        color: '#E74E3C',
        //fontWeight: 'bold',
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 10,
    }
})