import React from 'react';
import * as S from './styled';
import { ReactComponent as IconMoon } from '../../../public/images/icon-moon.svg';
import { ReactComponent as IconSun } from '../../../public/images/icon-sun.svg';
import { useTheme } from '../../../pages/_app';

function Nav() {
  const { dark, toggleTheme } = useTheme();

  return (
    <S.Nav>
      <S.Logo src="/images/logo.svg" alt="Invoice app logo" />
      <S.Profile>
        <S.Toggle>{dark ? <IconMoon /> : <IconSun />}</S.Toggle>
        <S.Profile src="images/image-avatar.jpg" alt="Profile image" />
      </S.Profile>
    </S.Nav>
  );
}

export default Nav;
