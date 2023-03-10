import styles from '../styles/Skeleton.module.css'

export default function 
() {
  return (
    <div>
      <div className={styles.skeleton}>
        <div className={styles.sBanner}></div>
        <div className={styles.sHeader}></div>
        <div className={styles.sContent}></div>
        <div className={styles.sContent}></div>
        <div className={styles.sContent}></div>
      </div>
    </div>
  );
}
