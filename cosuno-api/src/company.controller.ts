import { Controller, Get, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import * as _ from 'lodash';

@Controller(`companies`)
export class CompanyController {

  constructor(private readonly companyService: CompanyService) {
  }

  @Get()
  searchCompanies(
    @Query(`q`) searchedName: string,
    @Query(`specialty`) specialtyParam: string[] | string,
  ): Company[] {
    const specialtyIds = specialtyParam && (
      !_.isArray(specialtyParam)
        ? [+specialtyParam]
        : specialtyParam.map(sid => +sid)
    );
    return this.companyService.getCompanies({ searchedName, specialtyIds });
  }
}
