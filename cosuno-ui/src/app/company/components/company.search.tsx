import * as React from 'react';
import * as _ from 'lodash';
import styled from 'styled-components/macro';
import { ChangeEvent } from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const CompanyListSearchStyled = styled.div`
  display: flex;
  flex-grow: 1;
`;

type Props = {
  defaultValue?: string;
  isLoading?: boolean;
  debounceTime?: number;
  onChange: (text: string) => void;
};

export const CompanyListSearch: React.FC<Props> = ({ defaultValue, onChange, isLoading, debounceTime = 300 }) => {
  const delayedOnChange = _.debounce(onChange, debounceTime);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    delayedOnChange(e.target.value);
  };

  return (
    <CompanyListSearchStyled>
      <Search
        loading={isLoading}
        defaultValue={defaultValue}
        onChange={onChangeText}
      />
    </CompanyListSearchStyled>
  );
};
