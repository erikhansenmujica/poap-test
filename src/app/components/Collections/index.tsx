"use client";
import styles from "./collections.module.css";
import { Input } from "../Inputs/mainInput";
import { List } from "./content/list";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { useCollections } from "@/app/hooks/useCollections";

const rubik = Rubik({ subsets: ["latin"] });

export const Collections = () => {
  const {
    address,
    setAddress,
    message,
    error,
    loading,
    collections,
    getCollections,
    removeCollections,
  } = useCollections();
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Image src="/poap.svg" width={100} height={100} alt=""></Image>
        <h1 className={styles.title}>COLLECTIONS</h1>
        <Input address={address} error={error} setAddress={setAddress} />
      </section>
      {!loading && (
        <div>
          <button
            className={`${styles.sendButton} ${rubik.className}`}
            onClick={getCollections}
          >
            GET
          </button>
          {collections.length ? (
            <button
              className={`${styles.resetButton} ${rubik.className}`}
              onClick={removeCollections}
            >
              RESET
            </button>
          ) : (
            <div />
          )}
        </div>
      )}
      <h3 className={styles.title}>{message}</h3>
      {loading ? (
        <div className={styles.loader}></div>
      ) : collections.length ? (
        <List collections={collections} />
      ) : (
        <div />
      )}
    </div>
  );
};
