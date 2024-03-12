import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface ContainerProps {
  children?: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: "rgba(228, 241, 255, 0.5)",
    borderRadius: 10,
    minWidth: "100%",
  },
});
