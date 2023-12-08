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
  Card,
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
// import AddProgramForm from '../addProgramForm/AddProgramForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProgram, deleteProgramByID, fetchProgramById } from '../../../../store/apps/programs/ProgramListSlice';
import { useNavigate } from 'react-router';


const ProgramList = () => {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => {
  //   setOpen(false);
  //   dispatch(resetSelectedStudent());
  // };
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => {
  //   setOpen(false);
  //   dispatch(resetSelectedStudent());
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const allProgram = useSelector((state) => state.ProgramReducer)
  const getAllProgram = useSelector((state) => state.ProgramReducer?.programs.programs || []);
  // const selectedProgram = useSelector((state) => state.ProgramReducer?.)
  console.log("allllll", getAllProgram);
  // console.log("edittttt",selectedProgram)


  useEffect(() => {
    dispatch(fetchProgram())
  }, [dispatch])


  const handleEdit = (programId) => {
    console.log("editttt", programId)
    dispatch(fetchProgramById(programId));

    // const guruId = getAllProgram.find((item) => item._id === programId)?.guru?._id;

    // if (guruId) {
    //   navigate(`/apps/programs/updatePrograms-list?guruId=${guruId}`);
    // }
    // setOpen(true)
    if (programId) {
      navigate(`/programs/editPrograms/${programId}`)
    }
  }

  const handleDelete = (programId) => {
    console.log("iddddd", programId)
    dispatch(deleteProgramByID(programId))
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
          <Card>

          <TableContainer>
            <Table
              aria-label="simple table"
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                    <Typography variant="h6">Program Name</Typography>
                  </TableCell >
                  <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                    <Typography variant="h6">Program Price</Typography>
                  </TableCell>
                  <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                    <Typography variant="h6">Program Duration</Typography>
                  </TableCell>
                  <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                    <Typography variant="h6">Program Status</Typography>
                  </TableCell>
                  {/* <TableCell>
                    <Typography variant="h6">Subactivity</Typography>
                  </TableCell> */}
                  {/* <TableCell>
                    <Typography variant="h6">Description</Typography>
                  </TableCell> */}
                  <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                    <Typography variant="h6">Action</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getAllProgram.map((item) => (

                  <TableRow key={item.id}>
                    <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                      <Stack direction="row" spacing={2}>
                        <Avatar src={item.programImage} alt={item.programImage} width="35" />
                        <Box alignItems={'center'} display={'flex'}>
                          <Typography variant="h6" fontWeight="600">
                            {item.programName}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {item.programPrice}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {item.programDuration}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {item.programStatus}
                      </Typography>
                    </TableCell>

                    <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
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
                        <Tooltip title="DeleteBtn"  >
                          <IconButton  >
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
          </Card>
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
