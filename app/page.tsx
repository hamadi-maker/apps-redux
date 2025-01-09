import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/counter"><h1>Counter With redux</h1></Link>
      <Link href="/shop"><h1>Shopping card With redux</h1></Link>
      <Link href="/form"><h1>Multi step form With redux</h1></Link>
    </div>
  );
}
