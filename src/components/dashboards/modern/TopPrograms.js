import React, { useEffect } from 'react';
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
    Button,
    Stack,
} from '@mui/material';
import TopPerformerData from './TopPerformerData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchProgram } from '../../../store/apps/programs/ProgramListSlice';
import { Grid } from '@mui/material';

const performers = TopPerformerData;

const TopPerformers = () => {
    // for select
    const [month, setMonth] = React.useState('1');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

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

    const filterTopFivePrograms = () => {
        const sortedPrograms = [...getAllProgram].sort((a, b) => {
            // Assuming dimmerNo is a numeric value, adjust the sorting logic accordingly
            return a.programName - b.programName;
        });

        // Slice the top five patch lights from the sorted list
        return sortedPrograms.slice(0, 5);
    };

    // Get the top five patch lights based on dimmer numbers
    const topFivePrograms = filterTopFivePrograms();

    const handleView = () => {
        navigate('/programs/programsList')
    }

    return (
        <DashboardCard
            // title="Programs"
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
                    {/* Title */}
                    <Typography variant="h5" fontWeight={600}>
                        Programs
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
                            view more
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
                                <Typography variant="subtitle2" fontWeight={600}>Price</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>Status</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>Duration</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topFivePrograms.map((basic) => (
                            <TableRow key={basic.id}>
                                <TableCell>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar src={basic.programImage} alt={basic.programImage} sx={{ width: 40, height: 40 }} />
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {basic.programName}
                                            </Typography>
                                        </Box>

                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {basic.programPrice}
                                    </Typography>
                                </TableCell>
                                {/* <TableCell>
                  <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                    {basic.programStatus}
                  </Typography>
                </TableCell> */}
                                <TableCell>
                                    <Chip
                                        sx={{
                                            bgcolor: basic.programStatus === 'Active' ? (theme) => theme.palette.success.light : (theme) => theme.palette.error.light,
                                            color: basic.programStatus === 'Active' ? (theme) => theme.palette.success.main : (theme) => theme.palette.error.main,
                                            borderRadius: '8px',
                                        }}
                                        size="small"
                                        label={basic.programStatus}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2">{basic.programDuration}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardCard>
    );
};

export default TopPerformers;
