import React, { FC, useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { IFilterApply, IFilterShow } from 'interface/filterInterface'
import { ICardProduct } from 'interface/productInterface'
import { ISortApply } from 'interface/sortInterface'
import { useGetProductsListQuery } from 'store/services/product'
import { menuCategories } from 'utils/constants/menuCategories'
import { formatQueryStringFilterSort } from 'utils/helpers/formatQueryStringFilterSort'
import { parseParamFilterQuery, parseParamSortQuery } from 'utils/helpers/parseParamQuery'

import { Button } from 'components/Button'
import { Loader } from 'components/Loader'
import { ProductCard } from 'components/ProductCard'

import { firstNumberPage } from './constants/firstNumberPage'
import { productsLimit } from './constants/productsLimit'
import { Filter } from './Filter'
import { FilterElementChecked } from './FilterElementChecked'
import { FilterModal } from './FilterModal'
import { Sort } from './Sort'

import styles from './CategoryPage.module.scss'

type Props = {
  category: string
}

export const CategoryPage: FC<Props> = ({ category }) => {
  const router = useRouter()

  const [pageCategory, setPageCategory] = useState(category)
  const [page, setPage] = useState(Number(router.query.page) || firstNumberPage)
  const [products, setProducts] = useState<ICardProduct[]>([])
  const [filterShow, setFilterShow] = useState<IFilterShow>()
  const [filter, setFilter] = useState<IFilterApply | null>(parseParamFilterQuery(router.query.filter))
  const [sort, setSort] = useState<ISortApply | null>(parseParamSortQuery(router.query.sort))

  useEffect(() => {
    if (page === firstNumberPage && !filter && !sort) return

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: page,
          limit: productsLimit,
          filter: formatQueryStringFilterSort(filter),
          sort: formatQueryStringFilterSort(sort)
        }
      },
      undefined,
      { shallow: true }
    )
    // eslint-disable-next-line
  }, [page, filter, sort])

  const categoryId = menuCategories.find(categoryElement => categoryElement.path === pageCategory)?.id as string
  const categoryName = menuCategories.find(categoryElement => categoryElement.path === pageCategory)?.name || ''

  const { data, isLoading, isSuccess, isFetching } = useGetProductsListQuery({
    elementName: categoryId,
    page: page,
    limit: productsLimit,
    filter: formatQueryStringFilterSort(filter),
    sort: formatQueryStringFilterSort(sort)
  })

  useEffect(() => {
    setPageCategory(category)
    setProducts([])
    setPage(Number(router.query.page) || firstNumberPage)
    setFilter(parseParamFilterQuery(router.query.filter))
    setSort(parseParamSortQuery(router.query.sort))
    // eslint-disable-next-line
  }, [category])

  useEffect(() => {
    if (data) {
      setFilterShow(data.filterData)
      setProducts(preState => [...preState, ...data.pageData])
    }
  }, [data])

  const handleFilterSortChange = useCallback(() => {
    setPage(firstNumberPage)
    setProducts([])
  }, [])

  const handleMorePage = useCallback(() => {
    setPage(preState => preState + 1)
  }, [])

  const handleRemoveFilter = useCallback(() => {
    setFilter(null)
    setPage(firstNumberPage)
    setProducts([])
  }, [])

  const handleRemoveElementFilter = useCallback((element: string) => {
    setFilter(preState => {
      const removeElement = Object.fromEntries(Object.entries(preState as IFilterApply)
        .filter(elementFilter => elementFilter[0] !== element))

      if (Object.keys(removeElement).length === 0) return null

      return { ...removeElement }
    })
    setPage(firstNumberPage)
    setProducts([])
  }, [])

  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader/>}

      <div className={styles.title}>
        {t(categoryName)}
      </div>

      <div className={styles.filter}>
        {isSuccess && data?.pageData.length !== 0 &&
          <Filter
            filterShow={filterShow as IFilterShow}
            selectedFilter={filter}
            onApplyFilter={setFilter}
            handleFilterSortChange={handleFilterSortChange}
          />
        }
      </div>

      {data?.pageData.length === 0 && <div className={styles.notFound}>Product not found...</div>}

      <div className={styles.products}>
        {isSuccess &&
          <div className={styles.productsHeader}>
            <div className={styles.filterChecked}>
              <div className={styles.filterButton}>
                <FilterModal>
                  <Filter
                    filterShow={filterShow as IFilterShow}
                    selectedFilter={filter}
                    onApplyFilter={setFilter}
                    handleFilterSortChange={handleFilterSortChange}
                  />
                </FilterModal>
              </div>
              <Button
                name="Remove filter"
                onClick={handleRemoveFilter}
                isDisabled={!filter}
              />
              {filter && Object.entries(filter).map(element =>
                <FilterElementChecked
                  key={element[0]}
                  elementChecked={element[0]}
                  onClick={handleRemoveElementFilter}
                />
              )}
            </div>
            <div className={styles.sort}>
              <Sort
                selectedOptions={sort}
                onApplySort={setSort}
                handleFilterSortChange={handleFilterSortChange}
              />
            </div>
          </div>
        }

        {isSuccess &&
          <div className={styles.productsContainer}>
            {products.map(product =>
              <ProductCard product={product} key={product.id} />
            )}

            {!isFetching && data && page < data.totalPages &&
              <div className={styles.productsMore}>
                <Button name="More" onClick={handleMorePage} />
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}
