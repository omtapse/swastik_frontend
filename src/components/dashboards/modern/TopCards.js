import React from 'react';
import { Box, CardContent, Grid, Typography } from '@mui/material';

import vihar from '../../../assets/images/icons/viharIcon.png'
import pillar from '../../../assets/images/icons/pillarIcon.png'
import guru from '../../../assets/images/icons/guruIcon.png'
import program from '../../../assets/images/icons/programIcon.png'



const TopCards = ({ counts }) => {
  const topcards = [
    {
      icon: vihar,
      title: 'Vihars',
      digits: counts.viharCount,
      bgcolor: 'primary',
    },
    {
      icon: pillar,
      title: 'Pillars',
      digits: counts.pillarCount,
      bgcolor: 'warning',
    },
    {
      icon: guru,
      title: 'Gurus',
      digits: counts.guruCount,
      bgcolor: 'secondary',
    },
    {
      icon: program,
      title: 'Programs',
      digits: counts.programCount,
      bgcolor: 'error',
    },
    // {
    //   icon: icon6,
    //   title: 'Payroll',
    //   digits: '$96k',
    //   bgcolor: 'success',
    // },
    // {
    //   icon: icon1,
    //   title: 'Reports',
    //   digits: '59',
    //   bgcolor: 'info',
    // },
  ];
  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={3} key={i} >
          <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={topcard.icon} width="50" />
              <Typography
                color={topcard.bgcolor + '.main'}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
