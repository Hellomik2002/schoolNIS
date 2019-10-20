import React from 'react';
import { LockOutlined, EmailOutlined } from '@material-ui/icons';
import TopLink from '../../atoms/topLink';
import './index.css';

const Header: React.FC = () => {
  return (
    <div className="Header">
      <div className="top_navigation">
        <div className="wrapper">
          <div className="space_middle_row"></div>
          <a href="/">
            <LockOutlined className="top_icons" /> Sing in
          </a>
          <a href="/">
            <EmailOutlined className="top_icons" />
            Contact us
          </a>
          <div className="space_big_row"></div>
        </div>
      </div>
      <div className="main_navigation">
        <div className="wrapper">
          <div className="top_Image"></div>
          <div className="top_links_row">
            <TopLink title="dsa" link="fasfd" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
