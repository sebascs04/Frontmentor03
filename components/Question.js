import { StyleSheet, Text, View,Pressable } from 'react-native';
import  ArrowIcon  from "./Icons/Arrow";

export default function Question({que,Press}) {
    const {id} = que
    
    return (
        <View style={styles.container}>
                <Pressable onPress={()=> Press(id)} style={({pressed})=> null}>
                    {({pressed})=>(
                        que.State == true ?
                            <View style={styles.subcontainer}>
                                <Text style={{fontWeight: '800',color: pressed ? '#FF9D4E' : null}}>{que.Question} </Text>
                                <ArrowIcon style={[styles.icon,{transform: [{rotate: '180deg'}]}]} />
                            </View>:
                            <View style={styles.subcontainer}>
                                <Text style={{color: pressed ? '#FF9D4E' : null}}>{que.Question} </Text>
                                <ArrowIcon style={styles.icon} />
                            </View>
                    )}
                </Pressable>
                {
                    que.State == true ? <Text style={{paddingTop: 5,color: 'rgba(0,0,0,0.5)'}}>{que.Answer}</Text> : null
                }
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding:1,
        paddingBottom: 20,
        borderBottomColor: '#E5E4E4',
        borderBottomWidth: 1,
        marginBottom:15
    },
    subcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    icon: {
        marginTop: 7,
    }
})