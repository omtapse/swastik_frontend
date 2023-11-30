import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  AvatarGroup,
  Chip,
  Paper,
  TableContainer,
  Stack,
  Button,
  Tooltip,
  IconButton,
} from '@mui/material';
import PageContainer from '../../../../components/container/PageContainer';
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ContactDetails from 'src/components/apps/contacts/ContactDetails';
import ContactList from 'src/components/apps/contacts/ContactList';
import ContactSearch from 'src/components/apps/contacts/ContactSearch';
import ContactFilter from 'src/components/apps/contacts/ContactFilter';
import AppCard from 'src/components/shared/AppCard';
import MUIDataTable from 'mui-datatables';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchGurus,deleteGuruByID, fetchGuruById } from '../../../../store/apps/guru/GuruSlice';


const GurusList = () => {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getAllGurus = useSelector((state) => state.GuruReducer?.gurus || []);
  console.log("allllll", getAllGurus);




  useEffect(() => {
    dispatch(fetchGurus())
  }, [])


  // const handleEdit = (programId) => {
  //   console.log("editttt", programId)
  //   dispatch(fetchProgramById(programId));
  //   // setOpen(true)
  //   if (programId) {
  //     navigate('/apps/programs/updatePrograms-list')
  //   }
  // }

  const handleEdit = (guruId) => {
    console.log("editttt", guruId)
    dispatch(fetchGuruById(guruId));
    // setOpen(true)
    if (guruId) {
      navigate('/apps/gurus/updateGuru-form')
    }
  }

  const handleDelete = (guruId) => {
    console.log("iddddd", guruId)
    dispatch(deleteGuruByID(guruId))
  };

  return (
    <PageContainer title="Program list" description="this is program list ">
      {/* <Breadcrumb
        title="Program list"
        subtitle="List of all programs"
      /> */}
      <Grid container xs={12}>
        {/* <Grid item xs={12} lg={12}>
          <Box mb={3} justifyContent={'flex-end'} display={'flex'}>
            <Button variant="contained" color="primary">
              Add new Program
            </Button>
          </Box>
        </Grid> */}
        <Grid item xs={12} lg={12}>
          <TableContainer>
            <Table
              aria-label="simple table"
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Experties</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Registered On</Typography>
                  </TableCell>
                  {/* <TableCell> */}
                  {/* <Typography variant="h6">Program Status</Typography>
                  </TableCell> */}
                  {/* <TableCell>
                    <Typography variant="h6">Subactivity</Typography>
                  </TableCell> */}
                  {/* <TableCell>
                    <Typography variant="h6">Description</Typography>
                  </TableCell> */}
                  <TableCell>
                    <Typography variant="h6">Action</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {getAllGurus.map((item) => (

                  <TableRow key={item.id}>
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <Avatar src={item.image} alt={item.image} width="35" />
                        <Box alignItems={'center'} display={'flex'}>
                          <Typography variant="h6" fontWeight="600">
                            {item.name}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {item.experties}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {item.createdAt}
                      </Typography>
                    </TableCell>
                    {/* <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {item.programStatus}
                      </Typography>
                    </TableCell> */}

                    <TableCell>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Tooltip title="View">
                          <IconButton>
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton>
                            <EditIcon onClick={e => handleEdit(item._id)} />
                            {/* onClick={e => handleEdit(item._id)} */}
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="DeleteBtn"  >
                          <IconButton  >
                            <DeleteIcon onClick={e => { console.log("deleeeeeee", item._id); handleDelete(item._id) }} />
                            {/* onClick={e => { console.log("deleeeeeee", item._id); handleDelete(item._id) }} */}
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>
        </Grid>
      </Grid>


    </PageContainer>
  );
};

export default GurusList;
