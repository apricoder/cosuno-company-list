import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UiSpecialty } from './specialty.types';
import styled from 'styled-components/macro';

type Props = {
  specialty: UiSpecialty;
  className?: string;
}

export const SpecialtyIcon = styled(({ specialty, className }: Props) => {
  return (
    <FontAwesomeIcon className={className} icon={specialty.icon} />
  );
})<Props>`
  width: 1em;
  height: 1em;
  padding: 0.3em;
`;
