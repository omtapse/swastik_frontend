import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import ProgramList from '../../../components/apps/programs/programList/ProgramList';
import GurusList from '../../../components/apps/gurus/gurusList/GurusList'

const ProgramListOne = () => {
  return (
    <PageContainer title="Gurus " description="this is gurus page">
      <Breadcrumb title="Gurus page" subtitle="Get gurus list" breadcrumbImg={''} />
      {/* ------------------------------------------- */}
      {/* Blog Listing */}
      {/* ------------------------------------------- */}
      <GurusList />
    </PageContainer>
  );
};

export default ProgramListOne;
