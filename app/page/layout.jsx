import styles from "@/app/style/pageLayout.module.css";
import Dashboard from "@/app/components/Dashboard";
import Navbar from "@/app/components/Navbar";
export default function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.layoutContent}>
        <Dashboard />
      </div>
      <div className={styles.layoutContentNav}>
        <Navbar />
      </div>
      <div className={styles.pageContentLayout}>{children}</div>
    </div>
  );
}
