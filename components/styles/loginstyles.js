import { StyleSheet } from 'react-native';
import {global_styles} from './global_styles'

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#000',
    padding: 30,
    
    borderRadius: 10,
    width: '90%',
    height: '50%', // Set card height to 70% of the container
    // elevation: 5,
    position: 'absolute',
    
    // bottom: 100, // Align to the bottom
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center',
    color:'#125625'
  },
  input: {
    width: '100%',
    padding: 10,
    marginTop:40,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 15,
    color: '#fff',
    paddingLeft:20,
    fontSize:20
  },
  button: global_styles.button,
  buttonText: global_styles.buttonText,
});

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffff',
    padding: 20,
    borderRadius: 10,
    width: '85%',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#125625',
    marginBottom: 20,
    textAlign:'center'
  },
  input: {
    width: '100%',
    paddingVertical: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginTop:40,
    marginBottom: 20,
    paddingLeft:20,
    fontSize:20
  },
  button: global_styles.button,
  buttonText: global_styles.buttonText,
});
