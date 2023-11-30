import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/dark-rtl-logo.svg';
import { ReactComponent as LogoLight } from 'src/assets/images/logos/light-logo.svg';
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/light-logo-rtl.svg';
import { styled } from '@mui/material';
import { height } from '@mui/system';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled to="/" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        {customizer.activeMode === 'dark' ? (
         
<img src='/src/assets/images/logo/logoA.png' style={{height:'4rem'}} />
        ) : (
          
<img src='/src/assets/images/logo/logoA.png' style={{height:'4rem'}} />
        )}
      </LinkStyled>
    );
  }
  return (
    <LinkStyled to="/" style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      {customizer.activeMode === 'dark' ? (
          
<img src='/src/assets/images/logo/logoA.png' style={{height:'4rem'}} />
         ) : (
          
<img src='/src/assets/images/logo/logoA.png'style={{height:'4rem'}} />
          )}
    </LinkStyled>
  );
};

export default Logo;
