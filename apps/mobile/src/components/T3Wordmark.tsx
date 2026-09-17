import type { ColorValue, StyleProp, TextStyle } from "react-native";

import { AppText as Text } from "./AppText";

/**
 * Brand mark for the "And I" half of the And I Code lockup.
 * Matches the web sidebar lockup weight.
 */
export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  const style: StyleProp<TextStyle> = {
    fontSize: props.height,
    lineHeight: props.height * 1.2,
    fontWeight: "600",
    letterSpacing: -0.4,
    ...(props.color !== undefined ? { color: props.color } : null),
  };

  return (
    <Text
      accessibilityLabel="And I"
      className={props.colorClassName ?? "text-foreground"}
      style={style}
    >
      And I
    </Text>
  );
}
