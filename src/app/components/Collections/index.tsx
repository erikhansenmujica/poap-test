"use client";
import styles from "./collections.module.css";
import { Input } from "../MainInput";
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
    <div className={`${styles.flexColumn} ${styles.container}`}>
      <section className={`${styles.flexColumn} ${styles.section}`}>
        <Image src="/poap.svg" priority width={100} height={100} alt=""></Image>
        <h1 className={styles.title}>COLLECTIONS</h1>
        <Input address={address} error={error} setAddress={setAddress} />
      </section>
      {loading ? null : (
        <div>
          <button
            className={`${styles.button} ${styles.sendButton} ${rubik.className}`}
            onClick={getCollections}
          >
            GET
          </button>
          {collections ? (
            <button
              className={`${styles.button} ${styles.resetButton} ${rubik.className}`}
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
      ) : collections ? (
        <List collections={collections} />
      ) : (
        <div />
      )}
    </div>
  );
};
