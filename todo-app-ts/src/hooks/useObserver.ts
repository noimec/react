import { RefObject, useEffect, useRef } from "react"

// interface ObserverProps {
//     ref: RefObject<HTMLDivElement>
//     canLoad: boolean
//     isLoading: string | boolean | ((args_0: number, args_1: number) => Promise<void>)
//     callback: () => void
// }

export const useObserver = (ref: RefObject<HTMLDivElement>, canLoad: boolean, isLoading: string | boolean | ((args_0: number, args_1: number) => Promise<void>), callback: () => void) => {
    const observer = useRef<IntersectionObserver>();
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        let cb = (entries: any) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(cb);
        if (!ref.current) return
        observer.current.observe(ref.current)
    }, [isLoading])
}