import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import AddProgramForm from '../../../components/apps/programs/addProgramForm/AddProgramForm';
import GurusForm from '../../../components/apps/gurus/addGurus/AddGurus'
import { Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const ProgramsFormOne = () => {
  return (
    <PageContainer title="addGurus" description="this is Gurus page">
      <Grid item xs={12}>
          <ParentCard title="Gurus Details">
            <GurusForm />
          </ParentCard>
        </Grid>
    </PageContainer>
  );
};

export default ProgramsFormOne;
