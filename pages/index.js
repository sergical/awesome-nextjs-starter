import Link from 'next/link';
import styled from 'styled-components';
import PostList from '../components/PostList';

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

export default function HomePage() {
  return (
    <div>
      <h1>Home Page!</h1>
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
      <PostList />
    </div>
  );
}
