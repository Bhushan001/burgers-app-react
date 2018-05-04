import * as React from 'react';
import * as classes from "./Backdrop.css";
interface IBackdropProps {
    show:boolean
}

const Backdrop: React.SFC<IBackdropProps> = (props) => {
    if(props.show){
        return <div className={classes.Backdrop}>
            Hello
        </div>;
    }else{
        return null;
    }
};

export default Backdrop;