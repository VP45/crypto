import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js'
import moment from 'moment/'
import { Col, Row, Typography } from 'antd'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  )
const { Title } = Typography;


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = []
    const coinTimeStamp = []
    for(let i=0;i<coinHistory?.data?.history.length;i+=1) {
        coinPrice.push(coinHistory.data.history[i].price)
        // console.log(coinHistory.data.history[i].timestamp)
        // console.log(new Date(coinHistory.data.history[i].timestamp))
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString())
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    // const options = {
    //     scales: {
    //         yAxes: [
    //             {
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         ]
    //     }
    // }

  return (
    <>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>
                {coinName} Price Chart
            </Title>
            <Col className='price-container'>
                <Title level={5} className='price-change'>
                    {coinHistory?.data?.change}%
                </Title>
                <Title level={5} className='current-price'>
                    Current {coinName} Price: $ {currentPrice}
                </Title>
            </Col>
        </Row>
        <Line data={data}/>
    </>
  )
}

export default LineChart

