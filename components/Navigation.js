import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  list-style: none;
  li {
    margin-right: 10px;
    a {
      text-decoration: none;
      color: #416;
    }
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <li>
        <Link href="/about">
          <a>About 📄</a>
        </Link>
      </li>
      <li>
        <a href="/robots.txt">Robots 🤖</a>
      </li>
      <li>
        <a href="/sitemap.xml">Sitemap 🗺️</a>
      </li>
    </Nav>
  );
}
