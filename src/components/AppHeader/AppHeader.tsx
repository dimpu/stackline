
import { Header } from "antd/lib/layout/layout";
import logo from './stackline_logo.svg';
import { logoClassName } from './styles';

export const AppHeader = () => {
	return (<Header>
		<div className={logoClassName}>
			<img src={logo} alt="logo" /></div>
	</Header>)

}

export default AppHeader;