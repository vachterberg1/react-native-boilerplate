import dayIcon01 from '../icons/01d.png';
import nightIcon01 from '../icons/01n.png';
import dayIcon02 from '../icons/02d.png';
import nightIcon02 from '../icons/02n.png';
import dayIcon03 from '../icons/03d.png';
import nightIcon03 from '../icons/03n.png';
import nightIcon04 from '../icons/04n.png';
import dayIcon10 from '../icons/10d.png';
import nightIcon10 from '../icons/10n.png';

const verifyIcon = (icon: string) => {
  switch (icon) {
    case '01d':
      return dayIcon01;
    case '01n':
      return nightIcon01;
    case '02d':
      return dayIcon02;
    case '02n':
      return nightIcon02;
    case '03d':
      return dayIcon03;
    case '03n':
      return nightIcon03;
    case '04d':
      return dayIcon03;
    case '04n':
      return nightIcon04;
    case '10d':
      return dayIcon10;
    case '10n':
      return nightIcon10;
  }
};

export default verifyIcon;
