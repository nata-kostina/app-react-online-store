import React, { useState } from 'react';
import CatalogList from './catalogList/CatalogList';
import BasicLayout from '../../layouts/BasicLayout/BasicLayout';
import { storeApi } from './../../services/StoreService';
import Filter from './filter/Filter';
import styles from './style.module.scss'

function CatalogPage() {
  const { data: allProducts, isLoading: areProductsLoading, isFetching: areProductsFetching } = storeApi.useGetAllProductsQuery();
  const [fetchCategoryProducts, { data: filtered, isLoading: areFilteredLoading, isFetching: areFilteredFetching }] = storeApi.useLazyGetCategoryProductsQuery();
  const isDataFetching = areProductsFetching || areFilteredFetching;
  const [hasBeenFiltered, setHasBeenFiltered] = useState(false);
  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      setHasBeenFiltered(false);
    } else {
      setHasBeenFiltered(true);
      fetchCategoryProducts(category);
    }
  }
  return (
    <BasicLayout>
      <div className={styles.row}>
        <Filter handleCategoryClick={handleCategoryClick} />
        <CatalogList products={hasBeenFiltered ? filtered : allProducts} isDataFetching={isDataFetching} />
      </div>
    </BasicLayout>
  );
}

export default CatalogPage;