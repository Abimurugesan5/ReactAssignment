import { Bar } from "react-chartjs-2";
import './styles/Chart.css'
import ReactApexChart from 'react-apexcharts';
import React, { useState } from 'react';
import PopupCard from "./Addcard";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
    //   title: {
    //     display: true,
    //     text: "Modular Bar Chart",
    //   },
    },
  };
  
  const data = {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [
      {
        label: "User",
        display:false,
        data: [ 100, 200, 300, 400, 600],
        backgroundColor: "#98D89E",
        
      },
      {
        label:'Guest',
        data:[150,200,250,400,450],
        backgroundColor:'#EE8484'
        
      },
  
    ],
  
  };
  
  export default function Chart() {
    const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

    const [series] = useState([55, 31, 14,]);
    const customColors = ['#98D89E','#F6DC7D','#EE8484']; // Define custom colors for the series

const [options] = useState({
  chart: {
    width: 380,
    type: 'donut',
    
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  
  dataLabels: {
    enabled: false,
    
  },
  colors: customColors,
  labels: ["Basic Tess", "Custom Short Pants", "Super Hoodies"],

 
  legend: {
    formatter: function (val, opts) {
      return val + " "  +  opts.w.globals.series[opts.seriesIndex]+'%';
    },
  },
 
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
});

    return (
        <div className="chart">
        <div className="call">
            <p>Activities</p>
            <p className="text">May-June 2021</p>
      <div style={{width:"750px",height:"550px",marginLeft:"70px",marginTop:"0px",border:"20px"}}>
        <Bar options={option} data={data} />
      </div>
      
      </div> 
      
<div className="apps">
<div className="card1">
<p>Top Products</p><p className="may">May-June2021</p>

      <ReactApexChart options={options} series={series} type="donut" width={400} />

      </div>
      <div className="card1">
        
      <button className="round-button" onClick={openPopup}>
      +
    </button>
    <PopupCard showPopup={showPopup} onClose={closePopup} />

     <p className="addcard">Add Card</p>
       
      </div>

</div>
    
      {/* <div className="card2" sm={6}>
        <p>Top Products</p>
      <p className="may">May-June2021</p>

      <ReactApexChart options={options} series={series} type="donut" width={400} />

   
      </div>
      <div className="card3" sm={6}></div> */}

      </div>
    );
  }