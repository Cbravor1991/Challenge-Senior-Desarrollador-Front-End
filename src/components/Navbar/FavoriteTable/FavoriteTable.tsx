import { Person } from '@/models';
import {  removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import {IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC <FavoriteTableInterface> = () => {
  const pageSize = 5;
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const colums = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (

       
       
        <>  {
          <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
            <DeleteIcon />
          </IconButton>
        }</>
      )
    },
 {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ];


  return (
      
    <DataGrid 
    rows={stateFavorites} 
    initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
    pageSizeOptions={[5]}
    columns= {colums}
    disableColumnSelector 
    disableRowSelectionOnClick 
    autoHeight 
    getRowId={(row: any)=> row.id}
     />

)
};

export default FavoriteTable;

