import {useState} from "react";
import styles from './style.module.css'

export default function Tabs({tabs,defaultSelected=0}){
    const [selectedTabIndex,setSelectedTabIndex] = useState(defaultSelected);

    const handlerTabIndex = (ind) => setSelectedTabIndex(ind);

    return (
        <div className={styles.main}>
            <div className={styles.tabs}>
                {tabs.map((tab,ind)=>(
                    <div key={ind} onClick={()=>handlerTabIndex(ind)} className={`${styles.tab} ${selectedTabIndex===ind && styles.active} `}>
                        {tab.title}
                    </div>
                ))}
            </div>

            <div className={styles.data}>
                {tabs[selectedTabIndex].data}
            </div>
        </div>
    )
}