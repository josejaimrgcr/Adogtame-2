import {
    Alert,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../DB/firebase';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigator = useNavigation();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    Alert.alert("Exito", "Se ha iniciado sesion correctamente")
                    {/* @ts-ignore */ }
                    navigator.navigate('NavTab')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Error", errorMessage + " Codigo: " + errorCode)
            });
    }

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#6a8faf"} />

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/img/ADOGTAME_LOGO_TRANSP.png')}
                    style={styles.image}
                />
            </View>

            <View style={styles.whiteBackground}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text>Ingresa tus datos para iniciar sesión</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Correo:</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Ingresa tu correo'
                        keyboardType='email-address'
                        style={styles.formInput}
                    />
                    <Text style={styles.formText}>Contraseña:</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder='Ingresa tu contraseña'
                        style={styles.formInput}
                    />
                    <TouchableOpacity style={styles.btn} onPress={signUp}>
                        <Text style={styles.btnText}>
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.centerTextContainer}>
                    <TouchableOpacity style={styles.btnForgotPassword} >
                        <Text style={styles.btnForgotPasswordText}>Olvide la contraseña</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.centerTextContainer}>
                    <Text style={styles.noAccountText}>¿No tienes una cuenta?</Text>
                    {/* @ts-ignore */}
                    <TouchableOpacity onPress={() => navigator.navigate("Personales")}>
                        <Text style={styles.crearCuenta}> Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6a8faf',
        flex: 1
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 35
    },
    image: {
        width: 350,
        height: 300
    },
    whiteBackground: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    formContainer: {
        marginTop: 35
    },
    formText: {
        marginLeft: 10,
        color: '#000',
        fontFamily: 'Quicksand-Medium'
    },
    formInput: {
        padding: 10,
        marginBottom: 7.5,
        marginTop: 10,
        fontFamily: 'Quicksand-Medium',
        borderRadius: 10,
        color: '#374151',
        backgroundColor: '#E8E8E8'
    },
    btn: {
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15,
        // marginHorizontal: 30,
        borderRadius: 10,
        backgroundColor: '#b3a5d4',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 3.65,
        elevation: 6,
    },
    btnText: {
        color: '#374151',
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold'
    },
    btnForgotPassword: {
        marginTop: 15,
    },
    btnForgotPasswordText: {
        fontSize: 15,
        fontFamily: 'Quicksand-Medium',
        color: "#aaa"
    },
    centerTextContainer: {
        marginTop: 17.5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    noAccountText: {
        color: '#6B7280',
        fontFamily: 'Quicksand-SemiBold',
    },
    crearCuenta: {
        color: '#b3a5d4',
        fontFamily: 'Quicksand-Bold'
    }
});

// const styles = StyleSheet.create({
//   containerImagen: {
//     alignItems: 'center',
//     marginVertical: 30
//   },
//   input: {
//     height: 50,
//     marginHorizontal: 10,
//     marginVertical: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//     padding: 10,
//     borderRadius: 10,
//     fontSize: 17,
//     fontFamily: 'Quicksand-Medium',
//   },
//   btn: {
//     backgroundColor: '#b3a5d4',
//     padding: 15,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 3.65,
//     elevation: 6,
//     marginTop: 20,
//     width: '80%',
//   },
//   btnText: {
//     color: '#000',
//     textAlign: 'center',
//     fontSize: 17,
//     fontWeight: '500',
//     fontFamily: 'Quicksand-Medium'
//   },
//   btnForgotPassword: {
//     marginTop: 20,
//   },
//   btnForgotPasswordText: {
//     fontSize: 16,
//     fontFamily: 'Quicksand-Medium',
//     color: "#aaa"
//   },
//   createAccountText: {
//     fontFamily: 'Quicksand-Medium',
//     fontSize: 16,

//   },
//   containerCreateAccount: {
//     marginTop: 35,
//     flexDirection: 'row',
//     gap: 10,
//     alignItems: "center"
//   },
//   btnCreateAccount: {
//     backgroundColor: '#6a8faf',
//     padding: 15,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   btnCreateAccountText: {
//     fontFamily: 'Quicksand-Medium',
//     color: "white",
//     fontWeight: "500",
//   },
// });

export default Login;
