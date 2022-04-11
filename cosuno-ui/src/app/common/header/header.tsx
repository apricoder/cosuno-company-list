import { HeaderComponent } from './header.component';
import { connect } from 'react-redux';
import { AppState } from '../../app.store';

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
