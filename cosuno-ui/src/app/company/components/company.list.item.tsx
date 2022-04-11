import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { UiCompany } from '../company.types';
import { FlexColumn, FlexRow } from '../../common/components/flex';
import { Panel } from '../../common/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { SpecialtyIcon } from '../../specialty/specialty.icon.component';
import { specialtyMap } from '../../specialty/specialty.types';
import { Spin } from 'antd';

const CompanyListItemStyled = styled(Panel)`
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

type Props = {
  company: UiCompany;
};

const CompanyName = styled.h2`
  font-weight: 100;
  margin-top: 1.2rem;
  margin-bottom: 0;
`;

const SecondaryText = styled.span`
  font-size: 1rem;
  margin-left: .5rem;
`;

const CompanyLocation = styled(FlexRow)`
  margin-top: .2rem;
  align-items: center;
  flex-grow: 0;
`;

const CompanySpecialty = styled(CompanyLocation)`
  ${SpecialtyIcon} {
    padding: 0;
  }
`;

const CompanyData = styled(FlexColumn)`
  padding: 0 2rem;

  .svg-inline--fa {
    height: 1rem;
    width: 1rem;
  }
`;

const CompanyLogo = styled(({ className, logoUrl }) => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    setLoaded(true);
  }
  return (
    <Spin spinning={!loaded}>
      <img src={logoUrl} alt="company logo" className={className} onLoad={onLoad} />
    </Spin>
  );
})<{
  logoUrl: string;
  className?: string;
}>`
  background: ${({ logoUrl }) => `url(${logoUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: var(--panel-border-radius) 0 0 var(--panel-border-radius);
  height: 10rem;
  width: 10rem;
`;

export const CompanyListItem: React.FC<Props> = ({ company }) => {

  const specialty = specialtyMap[company.specialtyId];

  return (
    <CompanyListItemStyled>
      <FlexRow>
        <div>
          <CompanyLogo logoUrl={company.logoUrl} />
        </div>
        <CompanyData>
          <CompanyName>{company.name}</CompanyName>
          <CompanyLocation>
            <FontAwesomeIcon icon={faGlobeEurope} />
            <SecondaryText>{company.city}</SecondaryText>
          </CompanyLocation>
          <CompanySpecialty>
            <SpecialtyIcon specialty={specialty} />
            <SecondaryText>{company.specialty}</SecondaryText>
          </CompanySpecialty>
        </CompanyData>
      </FlexRow>
    </CompanyListItemStyled>
  );
};
