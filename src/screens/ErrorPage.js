import React from "react";
import { useHistory } from "react-router-dom";

function ErrorPage(props) {
  const history = useHistory();
  const { onErrorPage} = props;

  const [isErrorPage, setIsErrorPage] = React.useState(false);

  React.useEffect(() => {
    setIsErrorPage(true);
    onErrorPage(isErrorPage);
  }, []);

  const reverseSetIsErrorPage = () => {
    setIsErrorPage(true);
    history.push("/");
    onErrorPage(isErrorPage);
  };
  return (
    <>
      <div className="Error">
        <h2 className="Error__number">404</h2>
        <p className="Error__title">Что-то пошло не так,</p>
        <p className="Error__title">или такой страницы </p>
        <p className="Error__title">не существует!</p>
        <p className="Error__link" onClick={reverseSetIsErrorPage}>
          На главную
        </p>
      </div>
    </>
  );
}
export default ErrorPage;
