import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title,data,dataKey,grid}){
    
    return(
        
        <div className="chart">
            <h3 className="chartTitle">Sales Analytics</h3>
            <ResponsiveContainer width = "100%" aspect={4/1}>
              <LineChart data={data}>
                  <XAxis dataKey="name" stroke="#c629fb"/>
                  <Line type="monotone" dataKey="Active User" stroke="#c629fb" />
                  <Tooltip/>
                  {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
              </LineChart>  
            </ResponsiveContainer>
        </div>
    )
}