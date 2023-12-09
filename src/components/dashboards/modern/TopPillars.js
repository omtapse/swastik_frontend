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
import { fetchPillar } from '../../../store/apps/pillars/PillarSlice';
import { format, isValid } from 'date-fns';


const performers = TopPerformerData;

const TopPerformers = () => {
  // for select
  const [month, setMonth] = React.useState('1');

  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getAllPillar = useSelector((state) => state.PillarReducer?.pillars || []);


  console.log("allllll", getAllPillar);




  const filterTopFivePillars = () => {
    const sortedPillars = [...getAllPillar].sort((a, b) => {
        return a.name - b.name;
    });

    return sortedPillars.slice(0, 5);
};

const topFivePillars = filterTopFivePillars();

useEffect(() => {
    dispatch(fetchPillar())
  }, [dispatch])

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const handleView =() =>{
    navigate('/pillars/pillarList')
  }

  return (
    <DashboardCard
    >
        <Grid container spacing={3} alignItems="center">
                <Grid item xs={6}>
                    {/* Title */}
                    <Typography variant="h5" fontWeight={600}>
                        Pillars
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    {/* View More Button */}
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
              {/* <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>Experties</Typography>
              </TableCell> */}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>Action</Typography>
              </TableCell>
              {/* <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>Budget</Typography>
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {topFivePillars.map((basic) => (
              <TableRow key={basic.id}>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={basic.pillarImage} alt={basic.pillarImage} sx={{ width: 40, height: 40 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {basic.pillarTitle}
                      </Typography>
                     
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
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
