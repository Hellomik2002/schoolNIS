import React from 'react';
import './index.css';
export interface TopLinkProps {
  title: string;
  link: string;
}

const TopLink: React.FC<TopLinkProps> = (props: TopLinkProps) => (
  //
  <div className="top_links_nav">{props.title}</div>
);
export default TopLink;
