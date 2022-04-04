import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 10000,
            revenue: 60401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 119923,
            revenue: 24500
        },
        {
            month: 'May',
            investment: 500000,
            sell: 689426,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 666829,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 758901,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 887580,
            revenue: 61000
        }
    ]
    return (
        <div className='flex justify-center w-full my-3 '>
            <div>
                <div className='flex lg:flex-row md:flex-col sm:flex-col'>
                    <div className='mr-8'>
                        <h1 className='text-2xl font-semibold my-5 text-blue-700'>Month Wise Sell</h1>

                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />

                        </LineChart>

                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold my-5 text-blue-700'>Month wise Revenue</h1>
                        <AreaChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 13,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>

                    </div>
                </div>
                <div className='flex lg:flex-row md:flex-row sm:flex-col my-8'>
                    <div>
                        <h1 className='text-2xl font-semibold my-5 text-blue-700'>Investment vs Revenue</h1>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" fill="#8884d8" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold my-5 text-blue-700'>Investment vs Revenue</h1>
                        <PieChart width={350} height={350}>
                            <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            <Tooltip></Tooltip>
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Chart;