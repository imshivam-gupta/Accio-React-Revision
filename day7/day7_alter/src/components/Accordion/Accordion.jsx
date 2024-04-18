import { useState } from "react";
import styles from './style.module.css'
import { ChevronDown } from "react-feather";

export default function Accordion({title,data,openByDefault=false}){
    const [isOpen,setIsOpen] = useState(openByDefault);

    const togglerVisisblity = () => {
        setIsOpen(x=>!x);
    }

    return(
        <div className={styles.accordion}>
            <div className={styles.title} onClick={togglerVisisblity}>
                <p>{title}</p>
                <ChevronDown style={isOpen?{transform:"rotate(180deg)"} : {}}/>
            </div>

            {isOpen &&
                <div className={styles.data}>
                    {data}
                </div>
            }
        </div>
    )
}