import { GlobalStyle } from './GlobalStyle';

export const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <div>
        <div>Sidebar</div>
        <div>
          <div>Header</div>
          <div>
            Main Content
            <br />
            App
          </div>
          <div>Footer</div>
        </div>
      </div>
    </>
  );
};
