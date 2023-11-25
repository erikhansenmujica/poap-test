import { userCollections } from "@/actions/collections";
import { Collection } from "@/utils/types";
import { useState } from "react";

export const useCollections = () => {
  const [address, setAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [collections, setCollections] = useState<Collection[]>([]);
  const getCollections = async () => {
    try {
      if (collections.length) {
        setCollections([]);
      }
      if (error || message) {
        setError(false);
        setMessage("");
      }
      setLoading(true);
      const response = await userCollections(address);
      if ("length" in response) {
        if (!response.length) {
          setMessage("No collections found");
        } else {
          setCollections(response);
        }
      } else if ("message" in response) {
        setMessage(response.message);
        setError(true);
      } else {
        setMessage("No collections found");
      }
      setLoading(false);
    } catch (error) {
      setMessage("Something went wrong");
      setError(true);
      setLoading(false);
    }
  };
  const removeCollections = () => {
    setCollections([]);
    setAddress("");
    setMessage("");
  };
  return {
    address,
    setAddress,
    message,
    setMessage,
    error,
    setError,
    loading,
    setLoading,
    collections,
    setCollections,
    getCollections,
    removeCollections,
  };
};
