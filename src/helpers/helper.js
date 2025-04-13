import i18n from "../i18n";

export const env = (key, value = null) => {
    return import.meta.env[`VITE_${key}`] ?? value;
};

export const trans = (key, replace = {}) => {
    let text = i18n.t(key);

    for (const [k, v] of Object.entries(replace)) {
        text = text.replace(new RegExp(`:${k}`, 'g'), v);
    }

    return text;
};