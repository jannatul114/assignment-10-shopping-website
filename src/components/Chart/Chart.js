import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: 'May',
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000
        }
    ]
    return (
        <div className=' w-full my-3'>
            <div className='flex lg:flex-row md:flex-row sm:flex-col'>
                <div>
                    <LineChart width={500} height={500} data={data}>
                        <Line dataKey={"sell"}></Line>
                        <YAxis></YAxis>
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip></Tooltip>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    </LineChart>
                </div>
                <div>
                    <AreaChart width={500} height={500} data={data}>
                        <Area dataKey={"investment"}></Area>
                        <XAxis dataKey={"month"}></XAxis>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip></Tooltip>
                        <YAxis></YAxis>
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
        </div>

    );
};

export default Chart;