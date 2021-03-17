import React from 'react';
import * as S from './styled';
import { ReactComponent as IconMoon } from '../../../../public/images/icon-moon.svg';
import { ReactComponent as IconSun } from '../../../../public/images/icon-sun.svg';
import { useTheme } from '../../../../pages/_app';

function Nav() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <S.Nav>
      <S.LogoContainer>
        <S.Logo src="/images/logo.svg" alt="Invoice app logo" />
      </S.LogoContainer>
      <S.Profile>
        <S.Toggle onClick={() => toggleTheme()}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </S.Toggle>
        <S.Separator />
        <S.Picture src="images/image-avatar.jpg" alt="Profile image" />
      </S.Profile>
    </S.Nav>
  );
}

export default Nav;
