import { createContext, useState } from 'react';

export const RootContext = createContext({});

export default function RootProvider({ children }) {
  const { Provider } = RootContext;
  const [secretNumber, setSecretNumber] = useState(
    Math.trunc(Math.random() * 20 + 1)
  );
  const [userNumber, setUserNumber] = useState('');
  const [opponentsNumber, setOpponentsNumber] = useState(
    []
  );
  const [highScore, setHighScore] = useState(0);
  const [winner, setWinner] = useState(false);

  const updateUserNumber = (numberEntered) =>
    setUserNumber(numberEntered);
  const addOpponentNumber = () =>
    setOpponentsNumber((currentState) => [
      ...currentState,
      userNumber,
    ]);

  const updateResult = (result) => setWinner(result);
  const updateHighScore = (score) => setHighScore(score);

  const reset = () => {
    setWinner(false);
    setOpponentsNumber([]);
    setSecretNumber(Math.trunc(Math.random() * 20 + 1));
  };
  const value = {
    secretNumber,
    userNumber,
    opponentsNumber,
    winner,
    highScore,
    updateUserNumber,
    addOpponentNumber,
    updateResult,
    updateHighScore,
    reset,
  };

  return <Provider {...{ value }}>{children}</Provider>;
}
