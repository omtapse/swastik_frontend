import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ProgramList from '../../../components/apps/programs/programList/ProgramList';

const ProgramListOne = () => {
  return (
    <PageContainer title="Programs " description="this is Programs page">
      <Breadcrumb title="Programs page" subtitle="Get the latest Programs list" />
      {/* ------------------------------------------- */}
      {/* Blog Listing */}
      {/* ------------------------------------------- */}
      <ProgramList />
    </PageContainer>
  );
};

export default ProgramListOne;
