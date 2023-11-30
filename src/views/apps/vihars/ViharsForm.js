import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import AddProgramForm from '../../../components/apps/programs/addProgramForm/AddProgramForm';
import AddViharForm from '../../../components/apps/vihars/addVihars/AddVihars'
import { Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const ProgramsFormOne = () => {
  return (
    <PageContainer title="addVihars" description="this is addVihars page">
      <Grid item xs={12}>
          <ParentCard title="Vihar Details">
            <AddViharForm />
          </ParentCard>
        </Grid>
    </PageContainer>
  );
};

export default ProgramsFormOne;
