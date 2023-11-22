/**
 * Überprüft, ob ein Passwort gültig ist.
 * @param {string} password - Das zu überprüfende Passwort.
 * @return {boolean} - Gibt 'true' zurück, wenn das Passwort gültig ist, sonst 'false'.
 */
export const validatePassword = (password) => {
    // Passwort muss zwischen 8 und 20 Zeichen lang sein, mindestens einen Grossbuchstaben,
    // einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen enthalten
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/;
    return regex.test(password);
};


export const passwordValidationMessage = "Password must have min. 1 uppercase, 1 special char, and be 8+ chars long.";

