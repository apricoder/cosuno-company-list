import { faDigging, faWrench, faBolt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export enum SpecialtyId {
  Excavation = 1,
  Plumbing = 2,
  Electrical = 3,
}

export type UiSpecialty = {
  id: SpecialtyId;
  name: string;
  icon: IconDefinition;
}

export const specialtyMap: {
  [id: number]: UiSpecialty
} = {
  [SpecialtyId.Excavation]: {
    id: SpecialtyId.Excavation,
    name: `Excavation`,
    icon: faDigging,
  },
  [SpecialtyId.Plumbing]: {
    id: SpecialtyId.Plumbing,
    name: `Plumbing`,
    icon: faWrench,
  },
  [SpecialtyId.Electrical]: {
    id: SpecialtyId.Electrical,
    name: `Electrical`,
    icon: faBolt,
  },
};
