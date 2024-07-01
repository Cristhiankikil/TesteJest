import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = () => {
  const columnDefs = useMemo(() => [
    { headerName: 'Nome', field: 'Nome' },
    { headerName: 'Email', field: 'Email' },
    { headerName: 'Telefone', field: 'Telefone' },
    { headerName: 'Cep', field: 'Cep' },
    { headerName: 'Endereco', field: 'Endereco' },
  ], []);

  const rowData = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
    Nome: ` ${"Nome de Teste " + i  +` - ` + 1}`,
    Email: ` ${"Email de teste " + i +` - ` + 1}`,
    Telefone: ` ${"Telefone de teste "+ i  +` - ` + 1}`,
    Cep: ` ${"Cep de teste " + i  +` - `+ 1}`,
    Endereco: ` ${"Endereco de teste "+ i  +` - `+ 1}`,
  })), []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
};

export default Grid;
