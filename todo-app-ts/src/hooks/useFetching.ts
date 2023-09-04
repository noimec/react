import { useState } from "react";

export const useFetching = (callback: { (limit: number, page: number): Promise<void> }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args: [number, number]) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error]
}