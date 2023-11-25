import { Collection } from "@/utils/types";
import Image from "next/image";
import styles from "../collections.module.css";
import Link from "next/link";
interface ListProps {
  collections: Collection[];
}
export const List = ({ collections }: ListProps) => {
  return (
    <div className={styles.collectionContainer}>
      {collections.map((collection) => (
        <Link
          target="_blank"
          href={`https://poap.gallery/r/event/${collection.event.id}`}
        >
          <div key={collection.tokenId} className={styles.collectionCards}>
            <div className={styles.popover}>
              <p className={styles.cardName}>{collection.event.name}</p>
              <p className={styles.id}>{collection.event.id}</p>
            </div>
            <Image
              src={collection.event.image_url + "?size=small"}
              alt={""}
              className={styles.cardImage}
              width={1000}
              height={1000}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
