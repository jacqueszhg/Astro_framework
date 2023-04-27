import { useCallback, useEffect, useMemo, useState } from "react";
type Todo = {
  userId: number;
  title: string;
};

type TestComposantProps = {
  props1: number;
  props2: number;
};

function TestComposant({ props1, props2 }: TestComposantProps) {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [fetchValue, setFetchValue] = useState<Todo | null>(null);

  const valueDouble = useMemo(() => {
    console.log("aze");
    return value * 2;
  }, [value]);

  const fetchFunction = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(async (json: Todo) => {
        setFetchValue(json);
      });
  }, []);

  useEffect(fetchFunction, [fetchFunction]);

  console.log(props1, props2);

  return (
    <>
      <h1>Compteur : {value}</h1>
      <button onClick={() => setValue(value + 1)}>CLIQUE SUR MOI</button>
      <h2>{valueDouble}</h2>

      <h1>Compteur2à : {value2}</h1>
      <button onClick={() => setValue2(value2 + 1)}>CLIQUE SUR MOI</button>

      <br />

      <br />

      <h3>je suis fetch heee : {JSON.stringify(fetchValue)}</h3>
      <h3>je suis fetch heee : {fetchValue?.userId}</h3>
      <button onClick={() => setValue2(value2 + 1)}>CLIQUE SUR MOI</button>
    </>
  );
}

export default TestComposant;
