import { useState } from "react";

export const useValidatePassword = () => {
    const [ease, setEase] = useState(false);
    const [medium, setMedium] = useState(false);
    const [hard, setHard] = useState(false);

    const checkPassword = (password) => {
        if (
            (/[\d]/.test(password) ||
                /[a-zA-Z]/.test(password) ||
                /[^a-z0-9-]/.test(password)) &&
            password.length >= 8
        ) {
            setEase(true);
        } else {
            setEase(false);
        }
        if (
            (/^(?=.*[a-zA-Zа-яА-ЯёЁ])(?=.*[^a-z0-9-]).*$/.test(password) ||
                /^(?=.*[\d])(?=.*[^a-z0-9-]).*$/.test(password) ||
                /^(?=.*[a-zA-Zа-яА-ЯёЁ])(?=.*[\d]).*$/.test(password)) &&
            password.length >= 8
        ) {
            setMedium(true);
        } else {
            setMedium(false);
        }
        if (
            /^(?=.*[a-zA-Zа-яА-ЯёЁ])(?=.*[^a-z0-9-])(?=.*[\d]).*$/.test(
                password
            ) &&
            password.length > 8
        ) {
            setHard(true);
        } else {
            setHard(false);
        }
    };

    return { ease, medium, hard, checkPassword };
};
