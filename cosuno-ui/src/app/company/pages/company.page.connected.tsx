import { connect } from 'react-redux';
import { CompanyPage } from './company.page';
import { searchCompaniesRequest, changeCompanySearchParamsAction } from '../company.actions';
import { getQueryParams } from '../../router/router.selectors';
import { AppState } from '../../app.store';
import { getDisplayCompanies } from '../company.selectors';

const mapStateToProps = (state: AppState) => ({
  queryParams: getQueryParams(state),
  displayCompanies: getDisplayCompanies(state.company),
  isLoadingCompanies: state.company.list.isLoading,
});

const mapDispatchToProps = {
  searchCompanies: searchCompaniesRequest,
  changeCompanySearchParams: changeCompanySearchParamsAction,
};

export const CompanyPageConnected = connect(mapStateToProps, mapDispatchToProps)(CompanyPage);
