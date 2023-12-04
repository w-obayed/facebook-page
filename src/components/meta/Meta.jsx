import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0c36298b.jpg"
          type="image/x-icon"
        />
      </Helmet>
    </>
  );
};

export default Meta;
