import React from 'react';
import './index.css';
export interface TopLinkProps {
  title: string;
  link: string;
}

const TopLink: React.FC<TopLinkProps> = (props: TopLinkProps) => (
  //
  <div>{props.title}</div>
);
export default TopLink;
