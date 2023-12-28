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
import { fetchVihar } from '../../../store/apps/vihar/ViharSlice';
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
  const getAllVihar = useSelector((state) => state.ViharReducer?.vihars || []);

  const filterTopVihars = () => {
    const sortedVihars = [...getAllVihar].sort((a, b) => {
        return a.name - b.name;
    });
    return sortedVihars.slice(0, 5);
};

const topFiveVihars = filterTopVihars();

useEffect(() => {
    dispatch(fetchVihar())
  }, [dispatch])

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const handleView =() =>{
    navigate('/vihars/viharList');
}

  return (
    <DashboardCard
    >
        <Grid container spacing={3} alignItems="center">
                <Grid item xs={6}>
                    <Typography variant="h5" fontWeight={600}>
                        Vihars
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
              <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                <Typography variant="subtitle2" fontWeight={600}>Name</Typography>
              </TableCell>
              <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                <Typography variant="subtitle2" fontWeight={600}>Created At</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topFiveVihars.map((basic) => (
              <TableRow key={basic.id}>
                <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={basic.masterImage} alt={basic.masterImage} sx={{ width: 40, height: 40 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {basic.viharName}
                      </Typography>
                     
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell style={{ border: '1px solid rgba(204, 204, 204, 0.7)' }}>
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
