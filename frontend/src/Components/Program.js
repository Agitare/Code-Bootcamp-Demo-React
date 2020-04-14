import React from 'react';
import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Artist', field: 'artist' },
            { title: 'Song', field: 'song' },
            { title: 'Album', field: 'album' },
            { title: 'Genre', field: 'genre' },
            { title: 'Length', field: 'length' },
        ],
        data: [
            { artist: 'Metallica', song: 'One', album: 'And Justice for All', genre: 'Thrash metal', length: '7:27' },
            { artist: 'Metallica', song: 'The Shortest Straw', album: 'And Justice for All', genre: 'Thrash metal', length: '6:36' },
            { artist: 'Metallica', song: 'Dyers Eve', album: 'And Justice for All', genre: 'Thrash metal', length: '5:13' },
            { artist: 'Metallica', song: 'Battery', album: 'Master of Puppets', genre: 'Thrash metal', length: '5:13' },
            { artist: 'Metallica', song: 'Disposable Heroes', album: 'Master of Puppets', genre: 'Thrash metal', length: '8:17' },
            { artist: 'Metallica', song: 'Orion (instrumental)', album: 'Master of Puppets', genre: 'Thrash metal', length: '8:27' },
            { artist: 'Slayer', song: 'Reborn', album: 'Reign in Blood', genre: 'Thrash metal', length: '2:11' },
            { artist: 'Slayer', song: 'Raining Blood', album: 'Reign in Blood', genre: 'Thrash metal', length: '4:14' },
            { artist: 'Nightwish', song: 'Wishmaster', album: 'Wishmaster', genre: 'Symphonic metal', length: '4:24' },
            { artist: 'Nightwish', song: 'End of All Hope', album: 'Century Child', genre: 'Symphonic metal', length: '3:54' },
            { artist: 'Nightwish', song: 'Dead to the World', album: 'Century Child', genre: 'Symphonic metal', length: '4:19' },
            { artist: 'Týr', song: 'The Hammer of Thor', album: 'Ragnarok', genre: 'Folk metal', length: '6:39' },
            { artist: 'Týr', song: 'Ragnarok', album: 'Ragnarok', genre: 'Folk metal', length: '6:32' },
        ],
    });

    return (
        <MaterialTable
            icons={tableIcons}
            title="Music Database"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
