import { DataType } from "../types/types";

export function getMax(data:DataType[]){
    let max = 0;
    let total = 0;
    for(const day of data){
        total += day.amount;
        if(max < day.amount){
            max = day.amount
        }
    }
    if(max > 50){
        max -= 20;
    }
    return {data,max,total};
}

