import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import * as _ from 'lodash';
import { ParsedQuery } from 'query-string';
import { UiCompany } from '../company.types';
import { searchCompaniesRequest, changeCompanySearchParamsAction } from '../company.actions';
import { LeftPlaceholder, PageStyled, Panel, SideMenu, Content, RightPlaceholder } from '../../common/components';
import { FlexColumn, FlexRow } from '../../common/components/flex';
import { Checkbox } from 'antd';
import { specialtyMap, SpecialtyId, UiSpecialty } from '../../specialty/specialty.types';
import { SpecialtyIcon } from '../../specialty/specialty.icon.component';
import { CompanyList } from '../components/company.list';
import { CompanyListSearch, CompanyListSearchStyled } from '../components/company.search';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';

const CompanyPageStyled = styled(PageStyled)`
  ${CompanyListSearchStyled} {
    margin-bottom: 2rem;
  }
`;

export const SpecialtyFilter = styled.div`
  .ant-checkbox-wrapper {
    align-items: center;
  }
`;

export const SpecialtyCheckboxWrapper = styled.div`
  .ant-checkbox-wrapper {
    align-items: center;
  }
`;

export const SpecialtyCheckbox = styled(Checkbox)`
  &&& {
    align-items: center;
    cursor: pointer;
  }

  .ant-checkbox {
    margin-top: -.3rem;
  }
`;

export const SpecialtyCheckboxText = styled(FlexRow)`
  font-size: 1rem;
`

export const FilterTitle = styled.h4`
  font-weight: normal;
  font-size: 1.4rem;
  margin: 2rem 0 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

const FilterGroup = styled(Panel)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5rem;
  padding: 1rem;

  .ant-checkbox-wrapper {
    margin-left: 0;
    display: flex;
    align-items: baseline;

    &:not(:last-child) {
      padding-bottom: .7rem;
    }
  }

  ${SpecialtyIcon} {
    margin-left: .3rem;
    margin-right: .3rem;
  }
`;

export const CompanyListWrapper = styled.div`
  padding: 0;
`;

type Props = {
  queryParams: ParsedQuery;

  displayCompanies: UiCompany[];
  isLoadingCompanies: boolean;
  searchCompanies: typeof searchCompaniesRequest;

  changeCompanySearchParams: typeof changeCompanySearchParamsAction;
}

export const CompanyPage: React.FC<Props> = (
  {
    queryParams,

    displayCompanies,
    isLoadingCompanies,
    searchCompanies,

    changeCompanySearchParams,
  }
) => {

  const specialties = [
    specialtyMap[SpecialtyId.Excavation],
    specialtyMap[SpecialtyId.Plumbing],
    specialtyMap[SpecialtyId.Electrical],
  ];

  const getSearchFromQueryParams = (): string => _.isArray(queryParams.q)
    ? _.head(queryParams.q) as string
    : queryParams.q as string;

  const getSpecialtyFromQueryParams = (): number[] => (
    queryParams.specialty && (
      _.isArray(queryParams.specialty)
        ? queryParams.specialty.map(sid => +sid!)
        : [+queryParams.specialty!]
    )
  ) || [];

  const onSpecialtyChange = (specialtyId: SpecialtyId) => ({ target: { checked } }: CheckboxChangeEvent) => {
    const currentSpecialties = getSpecialtyFromQueryParams();
    return checked
      ? changeCompanySearchParams({ specialty: _.union(currentSpecialties, [specialtyId]) })
      : changeCompanySearchParams({ specialty: _.difference(currentSpecialties, [specialtyId]) });
  };

  const onChangeSearch = (text: string) => {
    changeCompanySearchParams({ q: text });
  };

  const initSearch = getSearchFromQueryParams();
  const initCheckedSpecialtiesMap: {[id: number]: boolean} = getSpecialtyFromQueryParams()
    .reduce((acc, next) => ({ ...acc, [next]: true }), {});

  useEffect(() => {
    searchCompanies({
      q: getSearchFromQueryParams(),
      specialty: getSpecialtyFromQueryParams()
    });
  }, [queryParams]);

  return (
    <CompanyPageStyled>

      <LeftPlaceholder>
        <SideMenu>

          <FilterTitle>Specialties</FilterTitle>
          <FilterGroup>
            <FlexColumn>
              {specialties.map((specialty: UiSpecialty) => (
                <SpecialtyCheckbox
                  key={specialty.id}
                  defaultChecked={initCheckedSpecialtiesMap[specialty.id]}
                  onChange={onSpecialtyChange(specialty.id)}
                >
                  <SpecialtyCheckboxText>
                    <SpecialtyIcon specialty={specialty} /> {specialty.name}
                  </SpecialtyCheckboxText>
                </SpecialtyCheckbox>
              ))}
            </FlexColumn>
          </FilterGroup>

        </SideMenu>
      </LeftPlaceholder>

      <Content>
        <CompanyListSearch defaultValue={initSearch} onChange={onChangeSearch} />
        <CompanyListWrapper>
          <CompanyList
            companies={displayCompanies}
            isLoading={isLoadingCompanies}
          />
        </CompanyListWrapper>
      </Content>

      <RightPlaceholder/>

    </CompanyPageStyled>
  );
};
