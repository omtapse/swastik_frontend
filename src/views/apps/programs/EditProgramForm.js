import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import AddProgramForm from '../../../components/apps/programs/addProgramForm/AddProgramForm';
import EditProgramForm from '../../../components/apps/programs/editProgram/EditProgram';
import { Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const ProgramsFormOne = () => {
  return (
    <PageContainer title="UpdatePrograms" description="this is UpdatePrograms page">
      <Grid item xs={12}>
          <ParentCard title="Program Details">
            <EditProgramForm />
          </ParentCard>
        </Grid>
    </PageContainer>
  );
};

export default ProgramsFormOne;
