import { ReactNode } from 'react';
import cl from './MyModal.module.css';

type PropsWithChildren<P = {}> = P & {
    children: ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyModal = ({ children, visible, setVisible }: PropsWithChildren) => {
    const rootClasses = [cl.myModal];

    visible && rootClasses.push(cl.active);

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}