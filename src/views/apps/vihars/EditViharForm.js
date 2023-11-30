import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import AddProgramForm from '../../../components/apps/programs/addProgramForm/AddProgramForm';
// import EditProgramForm from '../../../components/apps/programs/editProgram/EditProgram';
import EditViharForm from '../../../components/apps/vihars/editViharForm/EditViharForm'
import { Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const ViharsFormOne = () => {
  return (
    <PageContainer title="UpdateVihars" description="this is UpdateVihars page">
      <Grid item xs={12}>
          <ParentCard title="Vihar Details">
            <EditViharForm />
          </ParentCard>
        </Grid>
    </PageContainer>
  );
};

export default ViharsFormOne;
