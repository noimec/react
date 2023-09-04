import cl from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className={cl.loader__wrapper}>
            <div className={cl.loader}></div>
        </div>

    )
}