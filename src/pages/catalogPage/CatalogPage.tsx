import React from 'react';
import CatalogList from './catalogList/CatalogList';
import BasicLayout from '../../layouts/BasicLayout/BasicLayout';
import { storeApi } from './../../services/StoreService';

function CatalogPage() {
  const { data: products, isLoading, error } = storeApi.useGetAllProductsQuery();
  return (
    <BasicLayout>
      <>
        {products && <CatalogList products={products} />}
      </>
    </BasicLayout>
  );
}

export default CatalogPage;