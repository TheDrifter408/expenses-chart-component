import { CSSProperties } from "react"
import { BarProps } from "../types/types"

function Bar({ value, max }:BarProps){

    let barCtn:CSSProperties = {
        color:"hsl(28, 10%, 53%)",
        alignItems:"center",
        marginTop:"1rem",
        height:`${Math.floor(max)}vh`,
        display:"flex",
        flexDirection:"column",
        transform:"rotate(180deg)",
    }

    let bar:CSSProperties = {
        width:"2.25rem",
        borderRadius: "0.25rem",
        backgroundColor:"hsl(10, 79%, 65%)",
        height:`${value.amount*2.5}%`,
    }

    return(
        <div className="bar-parent flex flex-col w-full gap-1">
            <div style={barCtn}>
                <div className="bar" style={bar} />
                    <span>${value.amount}</span>
            </div>
            <p>{value.day}</p>
        </div>
        
    )
}

export default Bar;