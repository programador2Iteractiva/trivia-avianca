import { useEffect, useContext, useState, useMemo } from 'react';
import { ApiContext } from '../context/ApiContext';
import LogosAvianca from '../components/LogosAvianca';
import Footer from '../components/utils/Footer';
import LogoConcurso from "../assets/mobile/LogoConcursoFondo.png";
import * as XLSX from 'xlsx'; // 1. Importar la librería xlsx

// (La función formatTimestamp sigue siendo la misma)
const formatTimestamp = (isoString) => {
  if (!isoString) return 'N/A';
  try {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  } catch (e) {
    console.error("Error al formatear la fecha:", e);
    return 'Fecha inválida';
  }
};


function RankingView() {
  const { ranking, loading, error, handleGetRanking } = useContext(ApiContext);

  const [preferenceFilter, setPreferenceFilter] = useState('');
  const [reservationFilter, setReservationFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [dniFilter, setDniFilter] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    handleGetRanking();
  }, []);
  
  const filteredRanking = useMemo(() => {
    return ranking.filter(player => {
      const matchPreference = preferenceFilter ? player.preference === preferenceFilter : true;
      const matchReservation = reservationFilter ? player.reservation.toLowerCase().includes(reservationFilter.toLowerCase()) : true;
      const matchDni = dniFilter ? player.dni.toLowerCase().includes(dniFilter.toLowerCase()) : true;
      const matchDate = dateFilter ? player.timestamp.startsWith(dateFilter) : true;
      return matchPreference && matchReservation && matchDni && matchDate;
    });
  }, [ranking, preferenceFilter, reservationFilter, dateFilter, dniFilter]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRanking.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredRanking, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredRanking.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [preferenceFilter, reservationFilter, dateFilter, dniFilter]);
  
  // 2. Función para manejar la descarga del archivo XLSX
  const handleDownloadXLSX = () => {
    // Preparar los datos para la exportación (usamos los datos ya filtrados)
    const dataToExport = filteredRanking.map(player => ({
      'Posición': player.position,
      'Reservación': player.reservation,
      'Nombre': player.name,
      'DNI': player.dni,
      'Correo': player.email,
      'Teléfono': player.phone,
      'Preferencia': player.preference,
      'Tiempo (seg)': player.time_answered.toFixed(2),
      'Respuestas Correctas': player.correct_answers,
      'Fecha': formatTimestamp(player.timestamp)
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Ranking");
    
    // Disparar la descarga
    XLSX.writeFile(workbook, "ranking_trivia.xlsx");
  };


  if (loading) {
    return <div className="view flex items-center justify-center"><p>Cargando ranking...</p></div>;
  }

  if (error) {
    return <div className="view flex items-center justify-center"><p>Error al cargar el ranking. Por favor, intenta de nuevo.</p></div>;
  }

  return (
    <div className="rules-view view">
      <header className="w-full md:py-8">
        <LogosAvianca white={false} className="w-1/3 mx-auto" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center p-4">
        <img src={LogoConcurso} alt="Logo del concurso" className="w-2/5 md:w-1/6 mb-4" />
        <h1 className="text-3xl font-bold text-primary my-6">Ranking de Jugadores</h1>
        
        <div className="w-full max-w-7xl mb-4 p-4 bg-gray-50 rounded-lg shadow-md flex flex-wrap gap-4 items-center">
            <h2 className="text-lg font-semibold text-gray-700 w-full md:w-auto">Filtros</h2>
            <div className='flex-1 min-w-[150px]'>
                <label htmlFor="preference" className="block text-sm font-medium text-gray-700">Preferencia</label>
                <select id="preference" value={preferenceFilter} onChange={e => setPreferenceFilter(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                    <option value="">Todas</option>
                    <option value="libertadores">Libertadores</option>
                    <option value="sudamericana">Sudamericana</option>
                </select>
            </div>
             <div className='flex-1 min-w-[150px]'>
                <label htmlFor="reservation" className="block text-sm font-medium text-gray-700">Reservación</label>
                <input type="text" id="reservation" value={reservationFilter} onChange={e => setReservationFilter(e.target.value)} placeholder="Buscar por reserva..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div className='flex-1 min-w-[150px]'>
                <label htmlFor="dni" className="block text-sm font-medium text-gray-700">Cedula</label>
                <input type="text" id="dni" value={dniFilter} onChange={e => setDniFilter(e.target.value)} placeholder="Buscar por Cedula..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
             <div className='flex-1 min-w-[150px]'>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
                <input type="date" id="date" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            {/* 3. Botón para descargar el archivo */}
            <div className="w-full md:w-auto flex items-end">
                <button 
                    onClick={handleDownloadXLSX}
                    className="w-full md:w-auto mt-1 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Descargar XLSX
                </button>
            </div>
        </div>

        <div className="w-full max-w-7xl overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 rounded-lg shadow-lg">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-primary to-secondary">
              <tr>
                <th scope="col" className="px-4 py-3">Posición</th>
                <th scope="col" className="px-4 py-3">Reservación</th>
                <th scope="col" className="px-4 py-3">Nombre</th>
                <th scope="col" className="px-4 py-3">Cedula</th>
                <th scope="col" className="px-4 py-3">Correo</th>
                <th scope="col" className="px-4 py-3">Teléfono</th>
                <th scope="col" className="px-4 py-3">Preferencia</th>
                <th scope="col" className="px-4 py-3 text-center">Tiempo (seg)</th>
                <th scope="col" className="px-4 py-3 text-center">Correctas</th>
                <th scope="col" className="px-4 py-3">Fecha registro</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((player) => (
                <tr key={player.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-bold text-gray-900">{player.position}</td>
                  <td className="px-4 py-4">{player.reservation}</td>
                  <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">{player.name}</td>
                  <td className="px-4 py-4">{player.dni}</td>
                  <td className="px-4 py-4">{player.email}</td>
                  <td className="px-4 py-4">{player.phone}</td>
                  <td className="px-4 py-4 capitalize">{player.preference}</td>
                  <td className="px-4 py-4 text-center">{player.time_answered.toFixed(2)}</td>
                  <td className="px-4 py-4 text-center">{player.correct_answers}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{formatTimestamp(player.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between w-full max-w-7xl mt-4">
            <span className="text-sm text-gray-700">
                Página <span className="font-semibold">{currentPage}</span> de <span className="font-semibold">{totalPages}</span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-l hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    Anterior
                </button>
                <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-r border-0 border-l border-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    Siguiente
                </button>
            </div>
        </div>
      </main>

      <Footer white={false} />
    </div>
  );
}

export default RankingView;