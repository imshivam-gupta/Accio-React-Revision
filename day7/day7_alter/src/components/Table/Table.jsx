import { useState } from "react";
import styles from "./style.module.css";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Table({rows,cols,itemsperpage=4}){
    const [currentPage,setCurrentPage] = useState(1);
    const totalpages = Math.ceil(rows.length/itemsperpage);

    const si = (currentPage-1)*itemsperpage; // 0.3
    const ei = si+itemsperpage; //-1+1;
    const dispayedRows = rows.slice(si,ei);

    const handlePrev=  () =>{
        setCurrentPage(currentPage===1?1:currentPage-1);
    }

    const handleNext=  () =>{
        setCurrentPage(currentPage===totalpages?totalpages:currentPage+1);
    }

    return(
        <>
            <table className="styles.table">
                <thead>
                    <tr>
                        {cols.map((col,i)=>(
                            <th key={i}>{col.label}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>

                    {dispayedRows.map((row,i)=>(
                        <tr key={i}>
                            {cols.map((col,j)=>(
                                <td key={j}>{row[col.value]}</td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>

            {/* Pagination */}
            <div>
                <button disabled={currentPage===1} onClick={handlePrev}>
                    <ChevronLeft />
                </button>

                {Array.from({length:totalpages},(_,ind)=>(
                    <button key={ind+1}
                    onClick={()=>setCurrentPage(ind+1)}>{ind+1}</button>
                ))}

                <button disabled={currentPage===totalpages} onClick={handleNext}>
                    <ChevronRight />
                </button>
            </div>
        </>
    )
}