import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import AddProgramForm from '../../../components/apps/programs/addProgramForm/AddProgramForm';
// import EditProgramForm from '../../../components/apps/programs/editProgram/EditProgram';
import EditPillarForm from '../../../components/apps/pillars/editPillarForm/EditPillarForm'
import { Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const PillarFormOne = () => {
  return (
    <PageContainer title="UpdatePillars" description="this is UpdatePillars page">
      <Grid item xs={12}>
          <ParentCard title="Program Details">
            <EditPillarForm />
          </ParentCard>
        </Grid>
    </PageContainer>
  );
};

export default PillarFormOne;
