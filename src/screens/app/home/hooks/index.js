import { useEffect } from "react";
import { BackHandler } from "react-native";

export function useHooks() {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        BackHandler.exitApp();
        return true;
    };

    return {
    }
}