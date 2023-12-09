import React, { useEffect, useState } from 'react';
import DashboardCard from '../../shared/DashboardCard';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import {
  MenuItem,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TableContainer,
  Stack,
  Tooltip,
  Button,
  IconButton,
} from '@mui/material';
import TopPerformerData from './TopPerformerData';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGurus } from '../../../store/apps/guru/GuruSlice';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { format, isValid } from 'date-fns';


const performers = TopPerformerData;

const TopPerformers = () => {
  // for select
  const [month, setMonth] = React.useState('1');

  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();


  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const getAllGurus = useSelector((state) => state.GuruReducer?.gurus || []);
  console.log("allllll", getAllGurus);


  const filterTopFiveGurus = () => {
    const sortedGurus = [...getAllGurus].sort((a, b) => {
        // Assuming dimmerNo is a numeric value, adjust the sorting logic accordingly
        return a.name - b.name;
    });

    // Slice the top five patch lights from the sorted list
    return sortedGurus.slice(0, 5);
};

// Get the top five patch lights based on dimmer numbers
const topFiveGurus = filterTopFiveGurus();

  useEffect(() => {
    dispatch(fetchGurus())
  }, [])

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const handleView = () => {
    navigate('/gurus/gurusList')
  }

  return (
    <DashboardCard
    //   title="Gurus"
      // subtitle="Best Products"
      // action={
      //   <CustomSelect
      //     labelId="month-dd"
      //     id="month-dd"
      //     size="small"
      //     value={month}
      //     onChange={handleChange}
      //   >
      //     <MenuItem value={1}>March 2022</MenuItem>
      //     <MenuItem value={2}>April 2022</MenuItem>
      //     <MenuItem value={3}>May 2022</MenuItem>
      //   </CustomSelect>
      // }
    >
        <Grid container spacing={3} alignItems="center">
                <Grid item xs={6}>
                    <Typography variant="h5" fontWeight={600}>
                        Gurus
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box mb={3} justifyContent={'flex-end'} display={'flex'}>
                        <Button
                            onClick={handleView}
                            variant="contained"
                            color="primary"
                        >
                            View More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
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
                <Typography variant="subtitle2" fontWeight={600}>Name</Typography>
              </TableCell>
             
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>Created At</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topFiveGurus.map((basic) => (
              <TableRow key={basic.id}>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={basic.image} alt={basic.image} sx={{ width: 40, height: 40 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {basic.name}
                      </Typography>
                      <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                        {basic.experties}
                      </Typography>
                     
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                        {/* {basic.createdAt} */}
                        {isValid(new Date(basic.createdAt)) ? format(new Date(basic.createdAt),'dd-MM-yyyy'):'Invalid Date'}
                      </Typography>
                </TableCell>
                {/* <TableCell>
                  <Chip
                    sx={{
                      bgcolor:
                        basic.status === 'High'
                          ? (theme) => theme.palette.error.light
                          : basic.status === 'Medium'
                          ? (theme) => theme.palette.warning.light
                          : basic.status === 'Low'
                          ? (theme) => theme.palette.success.light
                          : (theme) => theme.palette.secondary.light,
                      color:
                        basic.status === 'High'
                          ? (theme) => theme.palette.error.main
                          : basic.status === 'Medium'
                          ? (theme) => theme.palette.warning.main
                          : basic.status === 'Low'
                          ? (theme) => theme.palette.success.main
                          : (theme) => theme.palette.secondary.main,
                      borderRadius: '8px',
                    }}
                    size="small"
                    label={basic.status}
                  />
                </TableCell> */}
                {/* <TableCell>
                  <Typography variant="subtitle2">${basic.budget}k</Typography>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

export default TopPerformers;
