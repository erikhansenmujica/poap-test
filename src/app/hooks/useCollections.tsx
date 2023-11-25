import { Collection } from "@/utils/types";
import { useState } from "react";

export const useCollections = () => {
  const [address, setAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [collections, setCollections] = useState<Collection[] | null>();
  const getCollections = async () => {
    try {
      if (!address) {
        setError(true);
        setMessage("Please insert an address");
        return;
      }
      if (collections) {
        setCollections(null);
      }
      if (error || message) {
        setError(false);
        setMessage("");
      }
      setLoading(true);
      const res = await fetch(`/api/collections/${address}`);
      const response = await res.json();
      if (response.ok) {
        if (!response.data) {
          setMessage("No collections found");
        } else {
          setCollections(response.data);
        }
      } else if (!response.ok) {
        if (response.error.message) {
          setMessage(response.error.message);
          setError(true);
        } else {
          setMessage("Something went wrong");
          setError(true);
        }
      }
      setLoading(false);
    } catch (error) {
      setMessage("Something went wrong");
      setError(true);
      setLoading(false);
    }
  };
  const removeCollections = () => {
    setCollections(null);
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
