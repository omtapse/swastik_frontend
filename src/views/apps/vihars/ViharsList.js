import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
// import ProgramList from '../../../components/apps/programs/programList/ProgramList';
import ViharsList from '../../../components/apps/vihars/viharList/ViharList'

const ProgramListOne = () => {
  return (
    <PageContainer title="Vihars " description="this is Vihars page">
      <Breadcrumb title="Vihars page" subtitle="Vihars List" />
      {/* ------------------------------------------- */}
      {/* Blog Listing */}
      {/* ------------------------------------------- */}
      <ViharsList />
    </PageContainer>
  );
};

export default ProgramListOne;
