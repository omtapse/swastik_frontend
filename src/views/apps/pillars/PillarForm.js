import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import AddProgramForm from '../../../components/apps/pillars/addPillarForm/AddPillarForm';
import AddPillarForm from '../../../components/apps/pillars/addPillarForm/AddPillarForm'
import { Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const PillarFormOne = () => {
  return (
    <PageContainer title="addPillar" description="this is addPillar page">
      <Grid item xs={12}>
          <ParentCard title="Pillar Details">
            <AddPillarForm />
          </ParentCard>
        </Grid>
    </PageContainer>
  );
};

export default PillarFormOne;
