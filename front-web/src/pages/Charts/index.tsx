import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Filters from '../../components/Filters';
import { Platform } from '../Record/types';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from '../../utils/graphicBuilder';
import {buildBarSeries, getGenderChartData, getPlatformChartData} from '../../utils/graphicStatistic'

import './styles.css';

export interface GameAttributs {
  id: number;
  title: string;
  platform: Platform;
}

export interface BarChartData {
  x: string;
  y: number;
}

interface PieChartData {
  labels: string[];
  series: number[];
}

const initialPieData = {
  labels:[],
  series: []
}

const Charts: React.FC = () => {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
  const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
  const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

  useEffect(()=>{
    async function getData(){
      const recordsResponse = await api.get(`records`);
      const gamesResponse = await api.get(`games`);
      
      const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
      setBarChartData(barData);

      const platformChartData = getPlatformChartData(recordsResponse.data.content);
      setPlatformData(platformChartData);

      const genderChartData = getGenderChartData(recordsResponse.data.content);
      setGenderData(genderChartData);
    }
    getData()
  },[])

  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELA" />
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">Jogos mais votados</h1>
          <div className="games-container">
            <Chart options={barOptions} type="bar" width="600" height="250" series={[{ data: barChartData }]} />
          </div>
        </div>

        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            <Chart options={{ ...pieOptions, labels: platformData?.labels }} type="donut" series={platformData?.series} width="350" />
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            <Chart options={{ ...pieOptions, labels: genderData?.labels }} type="donut" series={genderData?.series} width="350" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;