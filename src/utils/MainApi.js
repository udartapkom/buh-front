export class MainApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _getResponseData(response) {
      return response.then((res) => {
          if (res.ok) {
            return res.json();
          }
          if (res.status === 409 || res.status === 404 || res.status === 400 ) {
            return Promise.reject({
              status: res.status
            })
          }
          return Promise.reject(new Error(`Ошибка получения данных: ${res.status} ${res.statusText}`));
        })
    }

    // регистрация
    register(name, email, password) {
      return this._getResponseData(fetch(`${this._baseUrl}/signup`, {  
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password
          })
        }))
    }
  
    //авторизация
    login(email, password) {
      return this._getResponseData(fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            "email": email,
            "password": password
          })
        }))
    }
  
    //провека токена
    checkToken(token) {
      return this._getResponseData(fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          ...this._headers,
          "Authorization" : `Bearer ${token}`
        }
      }))
    }
  
    //данные пользователя
    getCurrentUser(token) {
      return this._getResponseData(fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          ...this._headers,
          "Authorization" : `Bearer ${token}`
        }
      }))
    }

    //Создать счёт
    createExpense(data){
        const token = localStorage.getItem('token');
        return this._getResponseData(fetch(`${this._baseUrl}/account/createaccount`, {  
            method: 'POST',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "title": data
            })
          }))
    }
    //Удалить счёт
    deleteExpense(data){
      const token = localStorage.getItem('token');
      return this._getResponseData(fetch(`${this._baseUrl}/account/deleteaccount`, {  
          method: 'DELETE',
          headers: {
              ...this._headers,
              "Authorization" : `Bearer ${token}`
            },
          body: JSON.stringify({
            "title": data
          })
        }))
  }

      //Обновить счёт
      updateExpense(oldExpense, expenseName){
        const token = localStorage.getItem('token');
        return this._getResponseData(fetch(`${this._baseUrl}/account/updateaccount`, {  
            method: 'PATCH',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "title": oldExpense,
              "newTitle": expenseName
            })
          }))
    }
        //Получить все счета
        getExpense(){
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/account/getaccounts`, {  
              method: 'GET',
              headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
                }
            }))
      }

      //создать категорию расходов
      createCostsCategory(data){
        const token = localStorage.getItem('token');
        return this._getResponseData(fetch(`${this._baseUrl}/category/createminus`, {  
            method: 'POST',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "title": data
            })
          }))
      }
      // редактировать категорию расходов
      updateCostsCategory(oldCategory, newCategory){
        const token = localStorage.getItem('token');
        return this._getResponseData(fetch(`${this._baseUrl}/category/updateminus`, {  
            method: 'PATCH',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "title": oldCategory,
              "newTitle": newCategory
            })
          }))
      }

        // удалить категорию расходов
        deleteCostsCategory(data){
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/category/deleteminus`, {  
            method: 'DELETE',
            headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
                "title": data,
              })
            }))
        }

        //получить все категории расходов
        getAllCostsCategory(){
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/category/getminus`, {  
              method: 'GET',
              headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
                }
            }))
        }

        //создать категорию доходов
      createIncomeCategory(data){
        const token = localStorage.getItem('token');
        return this._getResponseData(fetch(`${this._baseUrl}/categoryplus/createplus`, {  
            method: 'POST',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "title": data
            })
          }))
      }

       // редактировать категорию доходов
       updateIncomeCategory(oldCategory, newCategory){
        const token = localStorage.getItem('token');
        return this._getResponseData(fetch(`${this._baseUrl}/categoryplus/updateplus`, {  
            method: 'PATCH',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "title": oldCategory,
              "newTitle": newCategory
            })
          }))
      }

        // удалить категорию доходов
        deleteIncomeCategory(data){
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/categoryplus/deleteplus`, {  
            method: 'DELETE',
            headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
                "title": data,
              })
            }))
        }

        //получить все категории доходов
        getAllIncomeCategory(){
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/categoryplus/getplus`, {  
              method: 'GET',
              headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
                }
            }))
        }

        createIncomeSumm(data){ // создаём информацию о доходе
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/plus/createinfo`, {  
              method: 'POST',
              headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
                },
              body: JSON.stringify({
                "titleAccount": data.expense,
                "catPlus": data.category,
                "date": data.date,
                "summ": data.summ,
                "description": data.description
              })
            }))
        }

        createCostSumm(data){ // создаём информацию о расходе
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/minus/createinfo`, {  
              method: 'POST',
              headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
                },
              body: JSON.stringify({
                "titleAccount": data.costs,
                "catMinus": data.category,
                "date": data.date,
                "summ": data.summ,
                "description": data.description
              })
            }))
        }

        getDataRange(data){
          const token = localStorage.getItem('token');
           return this._getResponseData(fetch(`${this._baseUrl}/minus/getanyinfo`, {  
            method: 'POST',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "dateStart": data.expenseF,
              "dateOwer": data.expenseS
            })
          })) 
        } 

        getDataRangeExpense(data){
          const token = localStorage.getItem('token');
           return this._getResponseData(fetch(`${this._baseUrl}/plus/getanyinfo`, {  
            method: 'POST',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
              },
            body: JSON.stringify({
              "dateStart": data.expenseF,
              "dateOwer": data.expenseS
            })
          })) 
        } 

        getAllDataPlus(){ // вся информация о доходах
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/plus/getallinfo`, {  
              method: 'GET',
              headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
                }
            }))
        }

        getAllDataMinus(){ // вся информация о расходах
          const token = localStorage.getItem('token');
          return this._getResponseData(fetch(`${this._baseUrl}/minus/getallinfo`, {  
              method: 'GET',
              headers: {
                  ...this._headers,
                  "Authorization" : `Bearer ${token}`
                }
            }))
        }

  }
  
  const mainApi = new MainApi({
    baseUrl: 'http://api.coshelek2000.ru',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  export default mainApi;