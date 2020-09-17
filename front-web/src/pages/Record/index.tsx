import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import Pagination from './Pagination';
import { Platform } from './types';
import { formatDate } from '../../utils/formatDate';


interface RecordItem {
  id: number;
  moment: string;
  name: string;
  age: number;
  gameTitle: string;
  gamePlatform: Platform;
  genreName: string;
}

interface RecordsResponse {
  content: RecordItem[];
  totalPages: number;
}

const Recods: React.FC = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    axios.get(`https://sds1-domingos.herokuapp.com/records?linesPerPage=16&page=${activePage}`).then(
      response => setRecordsResponse(response.data));

  }, [activePage]);

  function handlePageChange(index: number){
    setActivePage(index)
  }
  return (
    <div className="page-container">
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map(record => (
            <tr>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination activePage={activePage} goToPage={handlePageChange} totalPages={recordsResponse?.totalPages} />
    </div>
  );
}

export default Recods;