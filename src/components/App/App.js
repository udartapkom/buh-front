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
import DeleteExpensePopup from '../DeleteExpensePopup/DeleteExpensePopup';
import EditExpensePopup from '../EditExpensePopup/EditExpensePopup';
import CreateIncomeCategoryPopup from '../CreateIncomeCategoryPopup/CreateIncomeCategoryPopup';
import EditIncomeCategoryPopup from '../EditIncomeCategoryPopup/EditIncomeCategoryPopup';
import DeleteIncomeCategoryPopup from '../DeleteIncomeCategoryPopup/DeleteIncomeCategoryPopup';
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
import attention from "../../images/attention.svg";

function App() {
  let messageText = "";
  let imageLink = null;
  const [showComponents, setShowComponents] = React.useState(false);

  // ниже блок работы с попапами
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState();
  const [textPopup, setTextPopup] = React.useState("");

  const [isEditCategoryPopupOpen, setIsEditCategoryPopupOpen] = React.useState(false);
  const [isCreateCategoryPopupOpen, setIsCreateCategoryPopupOpen] = React.useState(false);
  const [isDeleteCategoryPopupOpen, setIsDeleteCategoryPopupOpen] = React.useState(false);

  const [isCreateCategoryIncomeOpen, setIsCreateCategoryIncomeOpen] = React.useState(false);
  const [isEditCategoryIncomePopupOpen, setIsEditCategoryIncomePopupOpen] = React.useState(false);
  const [isDeleteIncomeCategoryPopupOpen, setIsDeleteIncomeCategoryPopupOpen] = React.useState(false);

  const [isCreteExpensePopupOpen, setIsCreteExpensePopupOpen] = React.useState(false);
  const [isEditExpensePopupOpen, setIsEditExpensePopupOpen] = React.useState(false);
  const [isDeleteExpensePopupOpen, setIsDeleteExpensePopupOpen] = React.useState(false);

  const [deleteExpenseName, setDeleteExpenseName] = React.useState("");
  const [expenseName, setExpenseName] = React.useState("");
  const [oldExpense, setOldExpense] = React.useState("");
  const [expenseObj, setExpenseObj] = React.useState({});

  const [categoryMinusObj, setCategoryMinusObj] = React.useState({});
  const [categoryPlusObj, setCategoryPlusObj] = React.useState({});

  const [categoryCostsName, setCostsCategoryName] = React.useState("");
  const [categoryIncomeName, setIncomeCategoryName] = React.useState("");
  const [deleteCategoryCostsName, setDeleteCategoryCostsName] = React.useState("");
  const [deleteCategoryIncomeName, setDeleteCategoryIncomeName] = React.useState("");

  //хуки работы с пользователем
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();
  let location = useLocation();

  // функции меняющие состояния открытия модалок
  function handleEditCategoryCostsClick(data) {
    setIsEditCategoryPopupOpen(!isEditCategoryPopupOpen); //инвертируем состояние
    setCostsCategoryName(data);
  }
  function handleCreateCategoryClick() {
    setIsCreateCategoryPopupOpen(!isCreateCategoryPopupOpen); //инвертируем состояние
  }
  function handleDeleteCategoryClick(data) {
    setIsDeleteCategoryPopupOpen(!isDeleteCategoryPopupOpen); //инвертируем состояние
    setDeleteCategoryCostsName(data);
  }
  function handleCreateCategoryIncomeClick() {
    setIsCreateCategoryIncomeOpen(!isCreateCategoryIncomeOpen);
  }
  function handleEditIncomeCategoryClick(data) {
    setIsEditCategoryIncomePopupOpen(!isEditCategoryIncomePopupOpen); //инвертируем состояние
    setIncomeCategoryName(data);
  }
  function handleDeleteIncomeCategoryClick(data) {
    setIsDeleteIncomeCategoryPopupOpen(!isDeleteIncomeCategoryPopupOpen); //инвертируем состояние
    setDeleteCategoryIncomeName(data);
  }
  function handleCreateExpenseClick() {
    setIsCreteExpensePopupOpen(!isCreteExpensePopupOpen); //инвертируем состояние
    //setCreateExpenseName(data)
  }
  function handleDeleteExpenseClick(data) {
    setIsDeleteExpensePopupOpen(!isDeleteExpensePopupOpen); //инвертируем состояние
    setDeleteExpenseName(data);
  }
  function handleEditExpenseClick(data) {
    setIsEditExpensePopupOpen(!isEditExpensePopupOpen); //инвертируем состояние
    setOldExpense(data);
  }

  function onSubmitExpense() {
    // функция для апи, отсюда отправляем данные на бэк о переводах со счёта на счет
    setTextPopup("Переведено cколько-то - куда-то");
    setIsInfoTooltipOpen(true);
  }

  function onEditCostsCategory(data) {
    //отсюда отправляем данные на бэк отредактированной категории
    mainApi
      .updateCostsCategory(categoryCostsName, data)
      .then((res) => {
        setTextPopup("Категория расходов успешно изменена на " + res.title + "!");
        setResultMessage(goodImage);
        setIsInfoTooltipOpen(true);
        getAllCategoryMinus();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При обновлении категории произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }
  function onCreateCostsCategory(data) {
    //  отсюда отправляем данные на бэк о созданной категории
    mainApi
      .createCostsCategory(data)
      .then((res) => {
        setTextPopup('Категория расходов "' + res.title + '" успешно создана!');
        setResultMessage(goodImage);
        setIsInfoTooltipOpen(true);
        getAllCategoryMinus();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При добавлении категории произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
    setTextPopup(data);
    setIsInfoTooltipOpen(true);
  }

  function getAllCategoryMinus() {
    //Получаем список всех категорий расходов пользователя
    mainApi
      .getAllCostsCategory()
      .then((res) => {
        setCategoryMinusObj(res);
      })
      .catch((error) => {
        if (error.status === 404) {
          onCreateCostsCategory("Без категории");
        }
        setResultMessage(falseImage);
        setTextPopup("При получении списка категорий произошла ошибка 1" + error);
        setIsInfoTooltipOpen(true);
      });
  }

  React.useEffect(() => {
    // получаем все категории расходов при авторизации
    if (loggedIn) {
      mainApi
        .getAllCostsCategory()
        .then((res) => {
          setCategoryMinusObj(res);
        })
        .catch((error) => {
          if (error.status === 404) {
            onCreateCostsCategory("Без категории");
          }
          setResultMessage(falseImage);
          setTextPopup("При получении списка категорий произошла ошибка 2" + error);
          setIsInfoTooltipOpen(true);
        });
    }
  }, [loggedIn]);

  function onDeleteCostsCategory(data) {
    // отсюда отправляем данные на бэк об удаляемой категории
    mainApi
      .deleteCostsCategory(data)
      .then((res) => {
        setTextPopup("Категория расходов успешно удалена!");
        setResultMessage(goodImage);
        setIsInfoTooltipOpen(true);
        getAllCategoryMinus();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При удалении категории произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }

  function onCreateIncomeCategory(data) {
    // создаём категорию доходов
    mainApi
      .createIncomeCategory(data)
      .then((res) => {
        setTextPopup('Категория доходов "' + res.title + '" успешно создана!');
        setResultMessage(goodImage);
        setIsInfoTooltipOpen(true);
        getAllCategoryPlus();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При добавлении категории произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }

  function onEditIncomeCategory(data) {
    // редактируем категорию
    mainApi
      .updateIncomeCategory(categoryIncomeName, data)
      .then((res) => {
        setTextPopup("Категория расходов успешно изменена на " + res.title + "!");
        setResultMessage(goodImage);
        setIsInfoTooltipOpen(true);
        getAllCategoryPlus();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При обновлении категории произошла ошибка " + error);
        setIsInfoTooltipOpen(true);
      });
  }
  function onDeleteIncomeCategory(data) {
    // отсюда отправляем данные на бэк об удаляемой категории
    mainApi
      .deleteIncomeCategory(data)
      .then((res) => {
        setTextPopup("Категория доходов успешно удалена!");
        setResultMessage(goodImage);
        setIsInfoTooltipOpen(true);
        getAllCategoryPlus();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При удалении категории произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }
  function getAllCategoryPlus() {
    //Получаем список всех категорий доходов пользователя
    mainApi
      .getAllIncomeCategory()
      .then((res) => {
        setCategoryPlusObj(res);
      })
      .catch((error) => {
        if (error.status === 404) {
          onCreateIncomeCategory("Без категории");
        }
        setResultMessage(falseImage);
        setTextPopup("При получении списка категорий произошла ошибка 3" + error);
        setIsInfoTooltipOpen(true);
      });
  }
  React.useEffect(() => {
    // получаем все категории доходов при авторизации
    if (loggedIn) {
      mainApi
        .getAllIncomeCategory()
        .then((res) => {
          setCategoryPlusObj(res);
        })
        .catch((error) => {
          if (error.status === 404) {
            onCreateIncomeCategory("Без категории");
          }
          setResultMessage(falseImage);
          setTextPopup("При получении списка категорий произошла ошибка 4" + error);
          setIsInfoTooltipOpen(true);
        });
    }
  }, [loggedIn]);

  function onCloseInfoTooltip() {
    setIsInfoTooltipOpen(false);
    setTextPopup("");
  }
  function closeAllPopups() {
    // возвращаем состояние false
    setIsEditCategoryPopupOpen(false);
    setIsCreateCategoryPopupOpen(false);
    setIsDeleteCategoryPopupOpen(false);
    setIsCreteExpensePopupOpen(false);
    setIsDeleteExpensePopupOpen(false);
    setIsEditExpensePopupOpen(false);
    setIsCreateCategoryIncomeOpen(false);
    setIsEditCategoryIncomePopupOpen(false);
    setIsDeleteIncomeCategoryPopupOpen(false);
  }
  // Закрытие модалки с формой. Клик в любом месте
  function closeByOverlayClick(event) {
    if (event.target.classList.contains("popup") && event.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }
  // конец блока работы с попапами

  const onSetErrorPage = (data) => {
    setShowComponents(data);
  };

  function onCreateIncome(data) {
    // функция для апи, отсюда отправляем данные на бэк о доходе
    mainApi
      .createIncomeSumm(data)
      .then((res) => {
        setResultMessage(goodImage);
        setTextPopup(`Внесён доход на счет: "${data.expense} 
" В категорию " ${data.category}  
" на сумму  ${data.summ} дата 
${data.date} с примечанием: ${data.description}`);
        setIsInfoTooltipOpen(true);
        getAllExpense();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При внесении суммы произошла ошибка " + error);
        setIsInfoTooltipOpen(true);
      });
  }
  function onCreateCosts(data) {
    // функция для апи, отсюда отправляем данные на бэк о расходе
    mainApi
      .createCostSumm(data)
      .then((res) => {
        setResultMessage(goodImage);
        setTextPopup(`Внесён расход на счет: "${data.costs} 
  " В категорию " ${data.category}  
  " на сумму  ${data.summ} дата 
  ${data.date} с примечанием: ${data.description}`);
        setIsInfoTooltipOpen(true);
        getAllExpense();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При списании суммы произошла ошибка " + error);
        setIsInfoTooltipOpen(true);
      });
  }

  React.useEffect(() => {
    //При входе проверяем юзера
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

  //Блок работы со счетами
  function onCreateExpense(data) {
    // создаём счёт
    mainApi
      .createExpense(data)
      .then((res) => {
        setTextPopup('Счет "' + res.title + '" успешно создан!');
        setResultMessage(goodImage);
        setIsInfoTooltipOpen(true);
        getAllExpense();
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При создании счёта произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }

  function getAllExpense() {
    // Получить все счета
    mainApi
      .getExpense()
      .then((res) => {
        setExpenseObj(res);
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 404) {
          setResultMessage(attention);
          setTextPopup("Для начала создайте хотя бы один счёт в разделе 'Счета'!");
          setIsInfoTooltipOpen(true);
        }
        setResultMessage(falseImage);
        setTextPopup("При получении списка счетов произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }

  React.useEffect(() => {
    // Получаем все счета при авторизации
    if (loggedIn) {
      mainApi
      .getExpense()
      .then((res) => {
        setExpenseObj(res);
      })
      .catch((error) => {
        if (error.status === 404) {
        setResultMessage(attention);
        onCreateExpense("По умолчанию");
          setIsInfoTooltipOpen(true);
        } else {
          setResultMessage(falseImage);
          setTextPopup("При получении списка счетов произошла ошибка" + error);
          setIsInfoTooltipOpen(true);
        }
      });
   }
  }, [loggedIn]);

  function onSetNewNameExpense(data) {
    setExpenseName(data);
  }

  function onDeleteExpense(data) {
    // Удаляем счёт
    mainApi
      .deleteExpense(data)
      .then((res) => {
        getAllExpense();
        setResultMessage(goodImage);
        setTextPopup("Удаление прошло успешно!");
        setIsInfoTooltipOpen(true);
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При удалении счёта произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }

  function onEditExpense(data) {
    mainApi
      .updateExpense(oldExpense, data)
      .then((res) => {
        getAllExpense();
        setResultMessage(goodImage);
        setTextPopup("Обновление прошло успешно!");
        setIsInfoTooltipOpen(true);
      })
      .catch((error) => {
        setResultMessage(falseImage);
        setTextPopup("При обновлении счёта произошла ошибка" + error);
        setIsInfoTooltipOpen(true);
      });
  }

  function getCurrentUser() {
    //получаем пользователя
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

  function onSubmitRegister({ name, email, password }) {
    // Регистрируемся
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
          setIsInfoTooltipOpen(true);
        } else {
          setResultMessage(falseImage);
          setTextPopup("При регистрации произошла ошибка");
          setIsInfoTooltipOpen(true);
        }
      });
  }

  function login(email, password) {
    //Логинимся
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
          setIsInfoTooltipOpen(true);
        } else {
          setTextPopup("При авторизации произошла ошибка");
          setIsInfoTooltipOpen(true);
        }
      });
  }
  function onSubmitLogin({ email, password }) {
    // проверяем наличие данных для авторизации
    if (!email || !password) {
      return;
    }
    login(email, password);
  }
  function handleSignOut() {
    // Разлогиниваемся и подчищаем за собой
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setLoggedIn(false);
    setCurrentUser({});
    setExpenseObj({});
    setCategoryMinusObj({});
    setCategoryPlusObj({});
    history.push("/signin");
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} handleSignOut={handleSignOut} />
        {loggedIn ? <Operative expenseObj={expenseObj} /> : null}
        <main className="Main">
          {loggedIn ? <Navigation /> : null}
          <Switch>
            <Route exact path="/">
              <Login onSubmitLogin={onSubmitLogin} />
            </Route>
            <ProtectedRoute
              exact
              path="/expense"
              component={Expense}
              onCreate={handleCreateExpenseClick}
              loggedIn={loggedIn}
              expenseObj={expenseObj}
              getAllExpense={getAllExpense}
              onDelete={handleDeleteExpenseClick}
              onEdit={handleEditExpenseClick}
            />
            <ProtectedRoute
              exact
              path="/category"
              component={Category}
              onCostsEdit={handleEditCategoryCostsClick}
              onAddCosts={handleCreateCategoryClick}
              onDeleteCosts={handleDeleteCategoryClick}
              onAddIncome={handleCreateCategoryIncomeClick}
              onIncomeEdit={handleEditIncomeCategoryClick}
              onDeleteIncome={handleDeleteIncomeCategoryClick}
              categoryPlusObj={categoryPlusObj}
              categoryMinusObj={categoryMinusObj}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              exact
              path="/income"
              component={Income}
              onCreateIncome={onCreateIncome}
              expenseObj={expenseObj}
              categoryPlusObj={categoryPlusObj}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              exact
              path="/costs"
              component={Costs}
              onCreateCosts={onCreateCosts}
              expenseObj={expenseObj}
              categoryMinusObj={categoryMinusObj}
              loggedIn={loggedIn}
            />
            <ProtectedRoute exact path="/analitic" component={Analitic} loggedIn={loggedIn} />
            <ProtectedRoute exact path="/charts" component={Charts} loggedIn={loggedIn} />
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
          <DeleteExpensePopup
            title={textPopup}
            isOpen={isDeleteExpensePopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onDeleteExpense={onDeleteExpense}
            expenseName={deleteExpenseName}
          />
          <EditExpensePopup
            title={textPopup}
            isOpen={isEditExpensePopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onSetNewNameExpense={onSetNewNameExpense}
            expenseName={expenseName}
            onEditExpense={onEditExpense}
          />
          <EditCategoryPopup
            title={textPopup}
            isOpen={isEditCategoryPopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onEditCostsCategory={onEditCostsCategory}
            categoryName={categoryCostsName}
          />
          <CreateCategoryPopup
            title={textPopup}
            isOpen={isCreateCategoryPopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onCreateCostsCategory={onCreateCostsCategory}
          />
          <DeleteCategoryPopup
            title={textPopup}
            isOpen={isDeleteCategoryPopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onDeleteCostsCategory={onDeleteCostsCategory}
            categoryName={deleteCategoryCostsName}
          />
          <CreateIncomeCategoryPopup
            title={textPopup}
            isOpen={isCreateCategoryIncomeOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onCreateIncomeCategory={onCreateIncomeCategory}
          />
          <EditIncomeCategoryPopup
            title={textPopup}
            isOpen={isEditCategoryIncomePopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onEditIncomeCategory={onEditIncomeCategory}
            categoryName={categoryCostsName}
          />
          <DeleteIncomeCategoryPopup
            title={textPopup}
            isOpen={isDeleteIncomeCategoryPopupOpen}
            onClose={closeAllPopups}
            closePopupForm={closeByOverlayClick}
            onDeleteIncomeCategory={onDeleteIncomeCategory}
            categoryName={deleteCategoryIncomeName}
          />
        </main>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
