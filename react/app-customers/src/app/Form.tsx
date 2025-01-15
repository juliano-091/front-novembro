"use client";
import React from "react";

interface Formprops {
  useTerms: boolean;
  handleUseTerms: () => void;
}

function Form(props: Formprops) {
  return <button onClick={props.handleUseTerms}>chama função pai</button>;
}
