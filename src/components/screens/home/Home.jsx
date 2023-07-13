import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { useValidatePassword } from "../../../hooks/useValidatePassword";

const Home = () => {
    const [password, setPassword] = useState("");

    const { ease, medium, hard, checkPassword } = useValidatePassword();

    useEffect(() => {
        checkPassword(password);
    }, [password]);

    return (
        <div className={styles.main}>
            <h1>Check password</h1>
            <div className={styles.password_block}>
                <div className={styles.input_block}>
                    <label htmlFor="password">Your password: </label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div
                    className={styles.ease}
                    style={{
                        color:
                            password.length < 1
                                ? "#c3c3c3"
                                : password.length < 8
                                ? "red"
                                : ease && medium && hard
                                ? "green"
                                : ease && medium
                                ? "yellow"
                                : "red",
                    }}
                >
                    Easy password
                </div>
                <div
                    className={styles.medium}
                    style={{
                        color:
                            password.length < 1
                                ? "#c3c3c3"
                                : password.length < 8
                                ? "red"
                                : medium && hard
                                ? "green"
                                : medium
                                ? "yellow"
                                : "#c3c3c3",
                    }}
                >
                    Medium password
                </div>
                <div
                    className={styles.hard}
                    style={{
                        color:
                            password.length < 1
                                ? "#c3c3c3"
                                : password.length < 8
                                ? "red"
                                : hard
                                ? "green"
                                : "#c3c3c3",
                    }}
                >
                    Hardest password
                </div>
            </div>
        </div>
    );
};

export default Home;
