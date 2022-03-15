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
  
  }
  
  const mainApi = new MainApi({
    baseUrl: 'http://api.myportfolios.ru',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  export default mainApi;