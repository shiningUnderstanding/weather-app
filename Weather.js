import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#D1E3E9", "#EDDB5A"],
    title: "Thunder",
    subtitle:
      "there is a thunder so don't go outside and just stay in house safely",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "it's fresh morning drizzle, today will be happy",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#373B44", "#00C6FB", "#A3C8E6"],
    title: "Rain",
    subtitle: "it's rainny, don't forget take umbrella",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#C2DAE1", "#F6F8F7"],
    title: "Snow",
    subtitle: "it's cold but snow is beautiful",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#283048", "#859398"],
    title: "Mist",
    subtitle: "mist make your eyesight bad, wathch out!",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#283048", "#859398"],
    title: "Smoke",
    subtitle:
      "it's kind of fog but it's hamful so take mask or stay in your home",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#FFC271", "#71808A", "#484665"],
    title: "haze",
    subtitle: "it's a small cloud but will be shine soon",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#283048", "#859398"],
    title: "Fog",
    subtitle: "fog make your eyesight bad, wathch out!",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#283048", "#7E5D42", "#859398"],
    title: "Sand",
    subtitle:
      "sand from west, it's so terrible take mask on and don't go outside",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#283048", "#97746E", "#859398"],
    title: "Dust",
    subtitle:
      "if you breathe you can feel this dust, take mask stay home, you need good mask",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#283048", "#859398"],
    title: "haze",
    subtitle: "ash from fire or volcano runaway as fast as you can",
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#373B44", "#00C6FB", "#A3C8E6"],
    title: "Squall",
    subtitle:
      "Squall is heavy rain, take umbrella but i recommand you stay home",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#314755", "#2A4E5E", "#061244"],
    title: "Tornado",
    subtitle:
      "super strong wind will blow you up to the sky, please runaway far from wind as you can",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "haze",
    subtitle: "sunny, shine, go outside take a walk and have enjoy your day",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "haze",
    subtitle: "it's cloud but don't worry just cloud",
  },
};
1;
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOption[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}'C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
