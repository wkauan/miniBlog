import { db } from "../../firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  let systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      }

      if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      }

      setError(systemErrorMessage);

      setLoading(false);
    }
  };

  // logout - sign out
  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  // login - sign in
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      }

      if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      }

      setError(systemErrorMessage);

      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
