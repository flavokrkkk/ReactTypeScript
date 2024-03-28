import React, {FC} from "react";

//Создание enum для props outline
export const enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

//Создание интерфейса для типизации props
interface CardProps {
    height?: string
    width?: string
    variant?: CardVariant
    children: React.ReactNode
}

const Card: FC <CardProps> = ({width, height, children, variant}) => {


    return (
        <div className="Card__Block" 
            style={{
                width, 
                height, 
                border: 
                variant === CardVariant.outlined ? '1 px solid gray' : 'none',
                background:
                variant === CardVariant.primary ? 'lightgray' : ''
                }}>
            {children}
        </div>
    );
};

export default Card;