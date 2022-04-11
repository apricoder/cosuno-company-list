import * as React from 'react';
import * as _ from 'lodash';
import { Spin } from 'antd';
import styled from 'styled-components/macro';
import { UiCompany } from '../company.types';
import { FlexColumn } from '../../common/components/flex';
import { CompanyListItem } from './company.list.item';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompanyListStyled = styled.div`
  font-size: 1.4rem;
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-bottom: 15rem;

  .ant-spin-nested-loading {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .ant-spin-container {
    width: 100%;
  }
`;

const NotFoundText = styled.span`
  margin-left: .5rem;
`

const NothingFoundWrapper = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
`

type Props = {
  companies: UiCompany[];
  isLoading?: boolean;
}

export const CompanyList: React.FC<Props> = ({ companies, isLoading }) => {
  return (
    <CompanyListStyled>
      <Spin spinning={isLoading}>
        <FlexColumn>
          {companies.map((company) => (
            <CompanyListItem key={company.id} company={company} />
          ))}
          {_.isEmpty(companies) && <NothingFoundWrapper>
            <FontAwesomeIcon icon={faFaceSadTear} />
            <NotFoundText>Oops, can't find anything for those search params</NotFoundText>
          </NothingFoundWrapper>}
        </FlexColumn>
      </Spin>
    </CompanyListStyled>
  );
};
