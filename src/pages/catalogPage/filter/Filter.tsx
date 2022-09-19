import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import React, { useMemo } from 'react';
import styles from './style.module.scss'
import { storeApi } from './../../../services/StoreService';
import { IFilterCategory } from '../../../types/types';

interface Props {
  handleCategoryClick: (category: string) => void,
}

const Filter = ({ handleCategoryClick }: Props) => {
  const { data: categories, isLoading } = storeApi.useGetAllCategoriesQuery();
  const customCategories: IFilterCategory[]= useMemo(() => {
    const memoized: IFilterCategory[] | undefined= categories?.map((category, i) => ({
    id: i.toString(),
    name: category,
  }));
    memoized?.unshift({
      id: 'All',
      name: 'All',
    });
    return memoized || [];
}, [categories]);
  return (
    <aside className={styles.filter}>
      <CAccordion className={styles.accordion} alwaysOpen activeItemKey={1}>
        <CAccordionItem itemKey={1} className={styles.accordion__item}>
          <CAccordionHeader className={styles.accordion__header}>Categories</CAccordionHeader>
          <CAccordionBody className={styles.accordion__body}>
            {customCategories.length > 0 &&
              <ul className={styles.list}>
                {customCategories.map((category) => {
                  return <li className={styles.list__item} key={category.id}>
                    <button type='button' 
                    className={styles['btn-category']} 
                    onClick={() => handleCategoryClick(category.name)}>{category.name}
                    </button>
                  </li>
                })}
              </ul>
            }
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </aside>
  );
};

export default Filter;