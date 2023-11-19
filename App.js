import { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function calcular(gasolina, alcool) {
    if (gasolina && alcool) {
      const resultado = alcool / gasolina;
      setResultado(resultado);
      setIsModalVisible(true);
    }
  }

  function closeModal() {
    setAlcool("");
    setGasolina("");
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.box_image}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
          <Text style={styles.title}>Qual a melhor opção?</Text>
        </View>
        <View style={styles.container_inputs}>
          <View>
            <Text style={styles.text}>Àlcool (preço por litro)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 4.60"
              keyboardType="numeric"
              onChangeText={(val) => setAlcool(val)}
              value={alcool}
            />
          </View>
          <View>
            <Text style={styles.text}>Gasolina (preço por litro)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 5.50"
              keyboardType="numeric"
              onChangeText={(val) => setGasolina(val)}
              value={gasolina}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcular(gasolina, alcool)} // Correção aqui
          >
            <Text style={styles.button_text}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" visible={isModalVisible}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.box_image}>
              <Image source={require("./assets/gas.png")} style={styles.logo} />
              <Text style={styles.title_green}>
                {resultado < 0.7
                  ? "Compensa usar àlcool"
                  : "Compensa usar gasolina"}
              </Text>
            </View>
            <View style={styles.container_inputs}>
              <Text style={styles.title}>Com os preços:</Text>
              <Text style={styles.text}>Gasolina: {gasolina}</Text>
              <Text style={styles.text}>Àlcool: {alcool}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => closeModal()}
              >
                <Text style={styles.button_text}>Calcular novamente</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    gap: 50,
  },
  box_image: {
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  title_green: {
    color: "#00FF00",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  container_inputs: {
    gap: 15,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
  },
  input: {
    padding: 10,
    height: 45,
    width: "100%",
    color: "#212121",
    borderRadius: 8,
    fontSize: 14,
    backgroundColor: "#FEFEFE",
    marginTop: 10,
  },
  button: {
    padding: 10,
    width: "100%",
    backgroundColor: "#F00",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
