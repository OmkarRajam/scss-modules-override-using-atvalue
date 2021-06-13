import styles from "./Wrapper.module.css";
const Wrapper = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            Wrapper
            {children}
        </div>
    );
};
export default Wrapper;
