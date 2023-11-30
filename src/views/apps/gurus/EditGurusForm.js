import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import EditGurusForm from '../../../components/apps/gurus/editGurus/EditGurus'
import { Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const GuruFormOne = () => {
  return (
    <PageContainer title="UpdateGurus" description="this is UpdateGurus page">
      <Grid item xs={12}>
          <ParentCard title="Guru Details">
            <EditGurusForm />
          </ParentCard>
        </Grid>
    </PageContainer>
  );
};

export default GuruFormOne;
