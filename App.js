import { Alert, StyleSheet, Text, View } from 'react-native';
import Questions from './components/Questions';
import { LinearGradient } from 'expo-linear-gradient'
import Mega from './components/Icons/Mega';
import { useState } from 'react';
const questions = [
  {
    Question: 'How many team members can I invite?',
    Answer: 'All you want.',
    State: false,
    id: 1,
  },
  {
    Question: 'What is the maximum file upload size?',
    Answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    State: false,
    id: 2,

  },
  {
    Question: 'How do I reset my password?',
    Answer: 'Call to our service.',
    State: false,
    id: 3,

  },
  {
    Question: 'Can I cancel my subscripction?',
    Answer: 'Yes, You do.',
    State: false,
    id: 4,

  },
  {
    Question: 'Do you provide additional support?',
    Answer: 'Yes.',
    State: false,
    id: 5,
  }
]

export default function App() {
  const [ques,setQues] = useState(questions)

  function Press(index) {
    setQues(
      ques.map((que)=> que.id== index ? {...que, State: !que.State} : {...que, State: false})
    )
  }


  
  return (
      <LinearGradient 
        style={styles.container}
        colors={['#CF60FF','#886EFF']}>
        <View style={styles.subcontainer}>
          <Mega />
          <View style={styles.div1}>
            <Text style={styles.text}>FAQ</Text>
            <Questions Press={Press} ques={ques} />
          </View>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginTop: 80,
    height: 550,
    borderRadius: 26,
    width: 315,
    padding: 22,
    elevation: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 35,
    marginBottom: 18,
  },
  div1: {
    marginTop: -190
  }
});
