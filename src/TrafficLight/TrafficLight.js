import React, { useCallback, useEffect } from "react";
import Light from "../Light/Light";
import Countdown from "../Countdown/Countdown";
import "./TrafficLight.css";

const Lights = {
  Red: {
    color: "red",
    timer: 10,
  },
  Yellow: {
    color: "yellow",
    timer: 3,
  },
  Green: {
    color: "green",
    timer: 10,
  },
};
export default function TrafficLight() {
  const [lightOn, setLightOn] = React.useState(Lights.Green);

  const turnOnNextLight = useCallback(() => {
    if (lightOn === Lights.Green) {
      setLightOn(() => Lights.Yellow);
      return;
    }

    if (lightOn === Lights.Yellow) {
      setLightOn(() => Lights.Red);
      return;
    }

    if (lightOn === Lights.Red) {
      setLightOn(() => Lights.Green);
      return;
    }
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      turnOnNextLight();
    }, lightOn.timer * 1000);

    return () => {
      return clearTimeout(timeoutId);
    };
  }, [lightOn, turnOnNextLight]);

  return (
    <div>
      <div className="traffic-light">
        <Countdown timer={lightOn.timer} />
        <Light color={Lights.Red.color} isOn={lightOn === Lights.Red} />
        <Light color={Lights.Yellow.color} isOn={lightOn === Lights.Yellow} />
        <Light color={Lights.Green.color} isOn={lightOn === Lights.Green} />
      </div>
    </div>
  );
}
