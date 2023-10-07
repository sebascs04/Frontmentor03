import { StyleSheet, Text, View } from 'react-native';
import PlatformIcon from "./Platform";
import WomanIcon from "./Woman";

export default function Mega() {
    return (
        <View style={styles.icon}>
            <WomanIcon  style={styles.a}/>
            <PlatformIcon style={styles.b}/>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
    },
    a: {
        marginTop: -190,
    },
    b: {
        marginTop: -122,
    }
});