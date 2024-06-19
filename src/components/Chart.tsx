import { ChartProps, DataType } from "../types/types";
import { getMax } from "../utils/getMax";
import Bar from "./Bar";

function Chart({ data }:ChartProps){
    const props = getMax(data);
    return(
        <>
            <div className="flex">
                {
                    props.data.map((info:DataType,idx) => (
                        <Bar key={idx} value={info} max={props.max} />
                    ))
                }
            </div>
            <>
                <div className="breakdown-ctn margin-inline-auto">
                    <p>Total this month</p>
                    <div className="stats flex justify-between items-center">
                        <p className="total">${props.total}</p>
                        <p><span>+2.4%</span> from last month</p>
                    </div>
                </div>
            </>
        </>
        
    )
}

export default Chart;