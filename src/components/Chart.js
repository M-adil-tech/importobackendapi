import React from 'react'
import { Doughnut, Pie } from 'react-chartjs-2';
import {Chart as ChartJS, PieController} from "chart.js/auto"
import "./Chart.css"

const totalBids = 100;
const succeededBids = 50;

const data = {
    labels: ["total-bids" , "succeded"],
    datasets : [
        {
            label : "success rate",
            data : [ totalBids - succeededBids, succeededBids],
            backgroundColor: ["white" , "#133554"],
            borderColor: "#133554",
            borderWidth: 1,

        },
    ],
};

export default function Chart() {
  return (
    <div className='chart'>
      <Doughnut data={data} />
    </div>
  )
}
