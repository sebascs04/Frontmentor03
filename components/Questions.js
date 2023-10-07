import { StyleSheet, Text, View } from 'react-native';
import Question from './Question';

export default function Questions({ques,Press}) {

    return (
        <View style={styles.container}>
            {
                ques.map((que)=>{
                    return (
                        <Question key={que.id} 
                                que={que}
                                Press={Press}
                                style={styles.container} />
                    )})
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5
    }
})
