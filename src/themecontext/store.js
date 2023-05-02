import { createContext, useReducer, useState } from "react";
export const Store = createContext({});

const initalState = {
    background: "#FAFBFC",
    text: "#5F6D7E",
    highlight: "bg-[#252D3C]"
}
const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return {
                background: "#FAFBFC",
                text: "#5F6D7E",
                highlight: "bg-[#252D3C]"
            };
        case "DARKMODE":
            return {
                background: "#000",
                text: "#000",
                highlight: "bg-[#000]"
            };
        default:
            return state;
    }
};

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initalState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}