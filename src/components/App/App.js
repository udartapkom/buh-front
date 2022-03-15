import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Expense from '../Expense/Expense';
import Category from '../Category/Category';
import EditCategoryPopup from '../EditCategoryPopup/EditCategoryPopup';
import CreateCategoryPopup from '../CreateCategoryPopup/CreateCategoryPopup';
import DeleteCategoryPopup from '../DeleteCategoryPopup/DeleteCategoryPopup';
import CreateExpensePopup from '../CreateExpensePopup/CreateExpensePopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Header from '../Header/Header'
import Operative from '../Operative/Operative';
import Navigation from '../Navigation/Navigation';
import Income from '../Income/Income';
import ErrorPage from '../../screens/ErrorPage';
import Costs from '../Costs/Costs';
import Analitic from '../Analitic/Analitic';
import Charts from '../Charts/Charts';
import mainApi from '../../utils/MainApi';

import goodImage from "../../images/good.svg";
import falseImage from "../../images/false.svg";

function App() {


  let messageText = "";
  let imageLink = null;
  const [showComponents, setShowComponents] = React.useState(false) ;

  // ниже блок работы с попапами
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState();
  const [textPopup, setTextPopup] = React.useState("");
  
  const [isEditCategoryPopupOpen, setIsEditCategoryPopupOpen] = React.useState(false);
  const [isCreateCategoryPopupOpen, setIsCreateCategoryPopupOpen] = React.useState(false);
  const [isDeleteCategoryPopupOpen, setIsDeleteCategoryPopupOpen] = React.useState(false);

  const [isCreteExpensePopupOpen, setIsCreteExpensePopupOpen] = React.useState(false);

  const [expenseName, setExpenseName] =React.useState('')

  const [categoryName, setCategoryName] = React.useState('');

  //хуки работы с пользователем
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();
  let location = useLocation();

  // функции меняющие состояния открытия модалок
  function handleEditCategoryClick(data) {
    setIsEditCategoryPopupOpen(!isEditCategoryPopupOpen); //инвертируем состояние
    setCategoryName(data)
    }
  function handleCreateCategoryClick() {
    setIsCreateCategoryPopupOpen(!isCreateCategoryPopupOpen); //инвертируем состояние
  }
  function handleDeleteCategoryClick(data) {
    setIsDeleteCategoryPopupOpen(!isDeleteCategoryPopupOpen); //инвертируем состояние
    setCategoryName(data)
  }
  function handleCreateExpenseClick(data) {
    setIsCreteExpensePopupOpen(!isCreteExpensePopupOpen); //инвертируем состояние
    setExpenseName(data)
  }

  function onSubmitExpense() { // функция для апи, отсюда отправляем данные на бэк о переводах со счёта на счет
    setTextPopup('Переведено cколько-то - куда-то')
    setIsInfoTooltipOpen(true)
  }
  function onEditCategory(data) { // функция для апи, отсюда отправляем данные на бэк отредактированной категории
    setTextPopup(data)
    setIsInfoTooltipOpen(true)
  }
  function onCreateCategory(data) { // функция для апи, отсюда отправляем данные на бэк о созданной категории нужно еще какой-то признак категории расходы или доходы
    setTextPopup(data)
    setIsInfoTooltipOpen(true)
  }
  function onDeleteCategory(data) { // функция для апи, отсюда отправляем данные на бэк об удаляемой категории нужно еще какой-то признак категории расходы или доходы
    //setTextPopup(data)
    setResultMessage(goodImage)
    setTextPopup('Категория "' + categoryName + '" успешно удалена!');
    setIsInfoTooltipOpen(true)
  }
  function onCloseInfoTooltip() {
    setIsInfoTooltipOpen(false);
    setTextPopup("");
  }
  function closeAllPopups() {
    // возвращаем состояние false
    setIsEditCategoryPopupOpen(false);
    setIsCreateCategoryPopupOpen(false);
    setIsDeleteCategoryPopupOpen(false);
    setIsCreteExpensePopupOpen(false)
  }
 // Закрытие модалки с формой. Клик в любом месте
 function closeByOverlayClick(event) {
  if (event.target.classList.contains("popup") && event.target.classList.contains("popup_opened")) {
    closeAllPopups();
  }
}
// конец блока работы с попапами

function onCreateExpense(data){ // создаём счёт
  mainApi
  .createExpense(data)
  .then((res) => {
    setTextPopup('Счет "' + res.title + '" успешно создан!');
    setResultMessage(goodImage)
    setIsInfoTooltipOpen(true)
  })
  .catch((error) => {
    setResultMessage(falseImage)
    setTextPopup("При создании счёта произошла ошибка" + error);
    setIsInfoTooltipOpen(true)
  })
}

const onSetErrorPage = (data) => {
    setShowComponents(data)
}

function onCreateIncome(data) { // функция для апи, отсюда отправляем данные на бэк о доходе
  console.log(data.expense)
  setResultMessage(goodImage)
  setTextPopup(`Внесён доход на счет: "${data.expense} 
  " В категорию " ${data.category}  
  " на сумму  ${data.summ} дата 
  ${data.date} с примечанием: ${data.description}`)
  setIsInfoTooltipOpen(true)
}
function onCreateCosts(data) { // функция для апи, отсюда отправляем данные на бэк о расходе
  setResultMessage(goodImage)
  setTextPopup(`Внесён расход на счет: "${data.costs} 
  " В категорию " ${data.category}  
  " на сумму  ${data.summ} дата 
  ${data.date} с примечанием: ${data.description}`)
  setIsInfoTooltipOpen(true)
}

React.useEffect(() => { //При входе проверяем юзера
  const path = location.pathname;
  const token = localStorage.getItem("token");
  if (token) {
    mainApi
      .checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          getCurrentUser();
          history.push(path);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        history.push("/");
      });
  }
}, []);

function getCurrentUser() { //получаем пользователя
  const token = localStorage.getItem("token");
  mainApi
    .getCurrentUser(token)
    .then((res) => {
      if (res) {
        setCurrentUser(res);
        localStorage.setItem("currentUser", JSON.stringify(res));
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function onSubmitRegister({ name, email, password }) { // Регистрируемся
  if (!name || !email || !password) {
    return;
  }
   mainApi
    .register(name, email, password)
    .then((res) => {
      if (res) {
        login(email, password);
      }
    })
    .catch((err) => {
      if (err.status === 409) {
        setTextPopup("Пользователь с таким email уже существует");
        setIsInfoTooltipOpen(true)
      } else {
        setResultMessage(falseImage)
        setTextPopup("При регистрации произошла ошибка");
        setIsInfoTooltipOpen(true)
      }
    }); 
}

 
function login(email, password) { //Логинимся
  mainApi
    .login(email, password)
    .then((res) => {
      if (res.token) {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        getCurrentUser();
        history.push("/expense");
      }
    })
    .catch((err) => {
      if (err.status === 400) {
        setTextPopup("Неверный email или пароль");
        setIsInfoTooltipOpen(true)
      } else {
        setTextPopup("При авторизации произошла ошибка");
        setIsInfoTooltipOpen(true)
      }
    });
} 

function onSubmitLogin({ email, password }) { // проверяем наличие данных для авторизации
  if (!email || !password) {
    return;
  }
  login(email, password);
}

function handleSignOut() { // Разлогиниваемся и подчищаем за собой 
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
  setLoggedIn(false);
  setCurrentUser({});
  localStorage.removeItem("initialMovies");
  history.push("/signin");
}
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} handleSignOut={handleSignOut} />
        {loggedIn ? <Operative /> : null}
        <main className="Main">
          {loggedIn ? <Navigation /> : null}
          <Switch>
            <Route exact path="/">
              <Expense 
              onSubmit={onSubmitExpense} 
              />
            </Route>
            <ProtectedRoute 
            exact path="/expense"
            component={Expense}
            onCreate={handleCreateExpenseClick}
            loggedIn={loggedIn}
            />

            <ProtectedRoute 
            exact path="/category"
            component={Category}
            onEdit={handleEditCategoryClick}
            onAdd={handleCreateCategoryClick}
            onDelete={handleDeleteCategoryClick}
            loggedIn={loggedIn}
            />

            <ProtectedRoute 
            exact path="/income"
            component={Income}
            onCreateIncome={onCreateIncome}
            loggedIn={loggedIn}
            />

            <ProtectedRoute 
            exact path="/costs"
            component={Costs}
            onCreateCosts={onCreateCosts}
            loggedIn={loggedIn}
            />

            <ProtectedRoute 
            exact path="/analitic"
            component={Analitic}
            loggedIn={loggedIn}
            />

            <ProtectedRoute 
            exact path="/charts"
            component={Charts}
            loggedIn={loggedIn}
            />

            <Route exact path="/signin">
              <Login onSubmitLogin={onSubmitLogin} />
            </Route>
            <Route path="/signup">
              <Register onSubmitRegister={onSubmitRegister} />
            </Route>
            <Route path="*">
              <ErrorPage onErrorPage={onSetErrorPage} />
            </Route>
          </Switch>

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={onCloseInfoTooltip}
            textMessage={textPopup}
            imageLink={resultMessage}
          />

          <CreateExpensePopup
            title={textPopup}
            isOpen={isCreteExpensePopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onCreateExpense={onCreateExpense}
          />

          <EditCategoryPopup
            title={textPopup}
            isOpen={isEditCategoryPopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onEditCategory={onEditCategory}
            categoryName={categoryName}
          />
          <CreateCategoryPopup
            title={textPopup}
            isOpen={isCreateCategoryPopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onCreateCategory={onCreateCategory}
          />
          <DeleteCategoryPopup
            title={textPopup}
            isOpen={isDeleteCategoryPopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onDeleteCategory={onDeleteCategory}
            categoryName={categoryName}
          />
          
        </main>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
