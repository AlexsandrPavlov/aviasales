import './HeaderStyle.scss';
import AviaLogo from './Logo.svg';

export const Header = () => {
  return (
    <a className=" icon" href="#">
      <img className=" icon-svg" src={AviaLogo} alt="Иконка самолета" />
    </a>
  );
};
