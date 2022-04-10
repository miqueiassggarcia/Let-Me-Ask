import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function  userAuth() {
  const value = useContext(AuthContext);

  return value;
}