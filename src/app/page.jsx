import styles from "./homepage.module.css";
import Link from "next/link";
// import styles from "./homepage.module.css";
import Featured from "@/app/components/featured/featured";
import CategoryList from "@/app/components/categoryList/categoryList";
import CardList from "@/app/components/cardList/cardList";
import Menu from "@/app/components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Featured /> */}
      {/* <CategoryList /> */}
      <div className={styles.content}>
        {/* <CardList page={page} /> */}
        {/* <Menu /> */}
      </div>
    </div>
  );
}
