import React from 'react';
import Headroom from 'react-headroom';
import {Menu} from 'semantic-ui-react';
import {RWContainer} from '../container/container';

const Header = ({siteTitle}) => (
  <Headroom
    upTolerance={10}
    downTolerance={10}>
    <Menu borderless pointing size="huge">
      <RWContainer>
        <Menu.Item>
          {siteTitle}
        </Menu.Item>
        <Menu.Item position="right">
          Phone number
        </Menu.Item>
      </RWContainer>
    </Menu>
  </Headroom>
);

export default Header;
