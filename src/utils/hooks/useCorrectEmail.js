import {
    useMemo
} from "react";

/**
 * Hook to validate if a given email is in the correct format.
 * 
 * @param email - The email to validate.
 * @returns A boolean indicating whether the email is valid.
 */
const useCorrectEmail = (email) => {
    const isValidEmail = useMemo(() => {
        if (!email) {
            return false;
        }

        // Regular expression for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }, [email]);

    return isValidEmail;
};

export default useCorrectEmail;