import { Injectable } from '@nestjs/common';
import { Company } from './company.model';
import { companyMocks } from './company.mocks';
import * as _ from 'lodash';

@Injectable()
export class CompanyService {
  getCompanies({ specialtyIds, searchedName }: { specialtyIds?: number[]; searchedName?: string }): Company[] {
    return companyMocks
      .filter(c => _.isEmpty(searchedName) || _.includes(c.name?.toLowerCase(), searchedName?.toLowerCase()))
      .filter(c => _.isEmpty(specialtyIds) || _.includes(specialtyIds, c.specialtyId));
  }
}
