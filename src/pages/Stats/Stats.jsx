import React, { useContext } from "react";
import { FriendContext } from "../../friendContext/FriendContext";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Stats = () => {
    const { timeLine } = useContext(FriendContext);

    const callCount = timeLine.filter((t) => t.type === "call").length;
    const videoCount = timeLine.filter((t) => t.type === "videocall").length;
    const textCount = timeLine.filter((t) => t.type === "text").length;
    const data = [
        { name: 'Call', value: callCount, color: "#3b82f6" },
        { name: 'Video', value: videoCount, color: "#10b981" },
        { name: 'Text', value: textCount, color: "#f59e0b" },

    ];



    return (
<div className="my-20"> <div style={{ width: "100%", height: '800px' }}> <ResponsiveContainer width="100%" height="100%"> <PieChart>
            <Pie

                data={data}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"

                dataKey="value"
                label
            >{data.map((entry, index) => (
                <Cell key={index} fill={entry.color}/>
       ))}
       </Pie>
            <Tooltip />

        </PieChart>
        </ResponsiveContainer>
            <div className="flex gap-3 items-center justify-center">
                {data.map((info) => (
                    <div  className="flex items-center gap-2   border-none " key={info.name}>
                        <div className="w-3 h-3 "style={{backgroundColor:info.color}}></div>
                        <span className="font-semibold">{info.name}</span>
                    </div>
                ))}
            </div>
        </div></div>
       
        


    );
}
export default Stats;