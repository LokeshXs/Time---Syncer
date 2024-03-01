import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from "react";

type StateType = {
  timezones: string[];
  setTimezones: Dispatch<SetStateAction<string[]>>;
};

export const initState: StateType = {
  timezones: [],
  setTimezones: () => {},
};

export const TimezonesContext = createContext<StateType>(initState);

export default function TimezonesProvider({
  children,
}: {
  children?: ReactElement | undefined;
}): ReactElement {
  const [timezones, setTimezones] = useState<string[]>([]);

  console.log(timezones);

  return (
    <TimezonesContext.Provider value={{ timezones, setTimezones }}>
      {children}
    </TimezonesContext.Provider>
  );
}
