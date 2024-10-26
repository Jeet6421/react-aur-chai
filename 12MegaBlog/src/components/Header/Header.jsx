import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className="bg-gray-500 bg-transparent border-s-purple-200 shadow-md w-full">
      <Container>
        <nav className="max-w-screen-xl mx-auto p-2 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex items-center justify-between ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.slug}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className=" py-2 px-4    rounded-lg md:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
