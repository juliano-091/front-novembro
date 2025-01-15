import { useEffect, useState } from "react";
import Button from "./Button";
import Form from "./Form";

export default function Home() {
  const [useTerms, setUseTerms] = useState<boolean>(false);
  useEffect(() => {
    console.log("valor do terms", useTerms);
  });

  return (
    <div>
      <h1>Aqui é o começo de tudo!</h1>
      <br />
      <Button name="xingiling" color="bg-blue-500"></Button>
      <Button name="teste" color="bg-orange-500"></Button>
      <Button name="teste 2" color="bg-green-500"></Button>
      <Form
        useTerms={useTerms}
        handleTerms={() => setUseTerms(!useTerms)}
      ></Form>
    </div>
  );
}
