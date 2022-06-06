import { FC } from "react";

interface IProps {
    propsText: string;
}


const Hello: FC<IProps> = ({ propsText }) => {
    return (
        <div>Hello First component: {propsText}</div>
    )
};

export default Hello;