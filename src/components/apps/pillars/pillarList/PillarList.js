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
// import AddStudentform from '../../../components/modal/forms/Addstudentform';
// import { basicsTableData } from '../../tables/tableData';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

import { useSelector, useDispatch } from 'react-redux';
// import { fetchProgram,CreateProgram,updateProgram} from '../../../../store/apps/programs/ProgramListSlice';
import { deletePillarByID, fetchPillar, fetchPillarById } from '../../../../store/apps/pillars/PillarSlice';
import { useNavigate } from 'react-router';
import { format, isValid } from 'date-fns';




const ProgramList = () => {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => {
  //   setOpen(false);
  //   dispatch(resetSelectedStudent());
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const allProgram = useSelector((state) => state.ProgramReducer)
  const getAllPillar = useSelector((state) => state.PillarReducer?.pillars || []);


  console.log("allllll", getAllPillar);

  useEffect(() => {
    dispatch(fetchPillar())
  }, [dispatch])


  const handleEdit = (pillarId) => {
    console.log("editttt", pillarId)
    dispatch(fetchPillarById(pillarId));
    // setOpen(true)
    if (pillarId) {
      navigate('/apps/pillars/updatePillars-form')
    }
  }


  const handleDelete = (pillarId) => {
    console.log("pillarriddddd", pillarId)
    dispatch(deletePillarByID(pillarId));
  };

  // const handleEdit = (studentId) => () => {
  //   dispatch(fetchStudentById(studentId));
  //   setOpen(true);
  // };

  // const handleDelete = (studentId) => () => {
  //   dispatch(deleteStudentById(studentId));
  // };

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
                    <Typography variant="h6">Pillar Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Registered On</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Updated On</Typography>
                  </TableCell>
                  {/* <TableCell>
                    <Typography variant="h6">Program Status</Typography>
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
                {getAllPillar.map((item) => (

                  <TableRow key={item.id}>
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <Avatar src={item.pillarImage} alt={item.pillarImage} width="35" />
                        <Box alignItems={'center'} display={'flex'}>
                          <Typography variant="h6" fontWeight="600">
                            {item.pillarTitle}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {/* {item.createdAt} */}
                        {/* {format(new Date(item?.createdAt), 'dd-MM-yyyy')} */}
                        {isValid(new Date(item.createdAt))
                          ? format(new Date(item.createdAt), 'dd-MM-yyyy')
                          : 'Invalid Date'
                        }

                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {/* {item.updatedAt} */}
                        {/* {format(new Date(item?.updatedAt), 'dd-MM-yyyy')} */}
                        {isValid(new Date(item.updatedAt))
                          ? format(new Date(item.updatedAt), 'dd-MM-yyyy')
                          : 'Invalid Date'
                        }
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
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton>
                            <DeleteIcon onClick={e => { console.log("deleeeeeee", item._id); handleDelete(item._id) }} />
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

      {/* <AddStudentform
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        selectedStudent={selectedStudent}
      /> */}
    </PageContainer>
  );
};

export default ProgramList;
