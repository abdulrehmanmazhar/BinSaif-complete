import styles from "./styles/ReadyToWear.module.css"
function ReadyToWear({ children, src }){
    return<>
    <div className={styles.ReadyToWear}>
    <div className={styles.unstitched}>
        <div className={styles.text}>
          <h1>READY TO WEAR</h1>
          <p className={styles.gray}>
            We aim to deliver the best quality fabric stitched and unstitched
            as well.
          </p>
          <p className={styles.gray}>
            This section is displaying high quality unstitched fabrics
          </p>
          <div className={styles.explore}>
          <button>
            <strong><a href="http://localhost:5173/products" target="__blank">EXPLORE ALL</a></strong>
          </button>
        </div>
        </div>
        <img src={src} alt="" />
      </div>
      {/* <div className={styles.filter}>
        <div>
          <button>SALE</button>
          <button>NEW</button>
        </div>
      </div> */}
      <div className={styles.children}>{children}</div>
    </div></>
}
export default ReadyToWear;