import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./../styles/themes/theme.scss";
import { Link } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="home">
      <div>
        <p>CHOOSE A</p>
        <h1>GAME</h1>
      </div>
      <div className="home__links">
        <button>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </button>
        <button>
          <Link to="/hangman">Hangman</Link>
        </button>
        <button>
          <Link to="/whack-a-mole">Whack A Mole</Link>
        </button>
        <button>
          <Link to="/memo">Memo</Link>
        </button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Games</title>;
