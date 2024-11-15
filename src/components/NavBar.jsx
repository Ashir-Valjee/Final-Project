import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/MindMatch3.png";

export default function NavBar() {
  return (
    <>
      <div data-theme="light" className="navbar bg-base-100">
        <div className="navbar-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/quiz-categories">
                  <i className="fa-regular fa-circle-question"></i> Quiz
                  categories
                </Link>
              </li>
              <li>
                <details>
                  <summary>
                    <Link href="/profile">
                      <i className="fa-regular fa-user"></i> Profile
                    </Link>
                  </summary>

                  <ul className="p-2">
                    <li>
                      <Link href="/profile/add-new-post">Add new post</Link>
                    </li>
                    <li>
                      <Link href="/profile/liked-posts">Liked Posts</Link>
                    </li>

                    <li>
                      <Link href="/profile/update-profile">Update profile</Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details>
                  <summary>
                    <Link href="/code">
                      <i className="fa-regular fa-object-ungroup"></i> Matching
                      Activities
                    </Link>
                  </summary>

                  <ul className="p-2 ">
                    <li>
                      <Link href="/code/cities">Cities Challenge</Link>
                    </li>
                    <li>
                      <Link href="/code/coding-challenge">
                        Coding Challenge
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/community">
                  <i className="fa-regular fa-message"></i> Community
                </Link>
              </li>
              <li>
                <Link href="/quiz-leaderboard">
                  <i className="fa-solid fa-medal"></i> Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost text-xl place-content-center">
            <Image alt="MindMatch" width="auto" height={50} src={logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/quiz-categories">
                <i className="fa-regular fa-circle-question"></i> Quiz
                categories
              </Link>
            </li>
            <li>
              <details>
                <summary>
                  <Link href="/profile">
                    <i className="fa-regular fa-user"></i> Profile
                  </Link>
                </summary>

                <ul className="p-2 w-[10vw]  z-10">
                  <li>
                    <Link href="/profile/add-new-post">Add new post</Link>
                  </li>
                  <li>
                    <Link href="/profile/liked-posts">Liked Posts</Link>
                  </li>

                  <li>
                    <Link href="/profile/update-profile">Update profile</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <Link href="/code">
                    <i className="fa-regular fa-object-ungroup"></i> Matching
                    Activities
                  </Link>
                </summary>

                <ul className="p-2 w-[15vw] z-10">
                  <li>
                    <Link href="/code/cities">Cities Challenge</Link>
                  </li>
                  <li>
                    <Link href="/code/coding-challenge">Coding Challenge</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/community">
                <i className="fa-regular fa-message"></i> Community
              </Link>
            </li>
            <li>
              <Link href="/quiz-leaderboard">
                <i className="fa-solid fa-medal"></i> Leaderboard
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
}
