import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import PillarListOne from '../../../components/apps/pillars/pillarList/PillarList'

const PillarList = () => {
  return (
    <PageContainer title="pillars " description="this is Pillars page">
      <Breadcrumb title="pillars page" subtitle="Get the Pillars list" />
      {/* ------------------------------------------- */}
      {/* Blog Listing */}
      {/* ------------------------------------------- */}
      <PillarListOne />
    </PageContainer>
  );
};

export default PillarList;
