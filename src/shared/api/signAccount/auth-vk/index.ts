// import axios from "axios";
// import { storeAuth } from "../../../store/store-auth/store-auth";

// export const handleLoginVk = async () => {
//   try {
//     console.log("Начинаем процесс авторизации VK...");
    
//     const loginUrl = "https://anilibria.top/api/v1/accounts/users/auth/social/vk/login";
//     console.log("Отправляем запрос на:", loginUrl);
    
//     const response = await axios.get(loginUrl, {
//       params: {
//         redirect_uri: "https://www.anilibria.top/api/v1/accounts/users/auth/social/vk/callback"
//       },
//       headers: {
//         accept: "application/json",
//       },
//     });

//     console.log("Получен ответ:", response.data);

//     if (response.data && response.data.url) {
//       console.log("Получен URL для редиректа:", response.data.url);
//       console.log("Параметры ответа:", {
//         url: response.data.url,
//         state: response.data.state,
//         redirect_uri: response.data.redirect_uri
//       });
      
//       // Сохраняем state для проверки после редиректа
//       if (response.data.state) {
//         localStorage.setItem("vk_auth_state", response.data.state);
//         console.log("State сохранен:", response.data.state);
//       } else {
//         console.warn("State не получен в ответе");
//       }
      
//       // Открываем окно авторизации VK
//       console.log("Открываем окно авторизации...");
//       const width = 800;
//       const height = 600;
//       const left = (window.screen.width - width) / 2;
//       const top = (window.screen.height - height) / 2;
      
//       const authWindow = window.open(
//         response.data.url,
//         'VK Auth',
//         `width=${width},height=${height},top=${top},left=${left}`
//       );

//       // Слушаем сообщения от окна авторизации
//       window.addEventListener('message', async function(event) {
//         if (event.origin !== window.location.origin) return;
        
//         if (event.data.type === 'vk_auth_success' && event.data.token) {
//           // Закрываем окно авторизации
//           authWindow?.close();
          
//           // Сохраняем токен
//           localStorage.setItem('auth_token', event.data.token);
          
//           // Устанавливаем состояние авторизации
//           storeAuth.setIsAuth(true);

//           try {
//             // Получаем данные пользователя
//             const userResponse = await axios.get(
//               "https://anilibria.top/api/v1/accounts/users/me/profile",
//               {
//                 headers: {
//                   'Authorization': `Bearer ${event.data.token}`,
//                   'accept': 'application/json'
//                 }
//               }
//             );

//             if (userResponse.data) {
//               storeAuth.setUserData(userResponse.data);
//               console.log("Данные пользователя получены:", userResponse.data);
//             }
//           } catch (error) {
//             console.error("Ошибка при получении данных пользователя:", error);
//           }
//         }
//       });
//     } else {
//       console.error("В ответе отсутствует URL для редиректа:", response.data);
//       throw new Error('Не удалось получить URL для авторизации VK');
//     }
//   } catch (error) {
//     console.error("Ошибка при авторизации через VK:", error);
//     if (axios.isAxiosError(error)) {
//       console.error("Детали ошибки:", {
//         status: error.response?.status,
//         data: error.response?.data,
//         headers: error.response?.headers
//       });
//     }
//     throw error;
//   }
// };

// // Функция для обработки callback после авторизации
// export const handleVkCallback = async (code: string, state: string) => {
//   try {
//     console.log("Получены параметры callback:", { code, state });
    
//     // Проверяем state для безопасности
//     const savedState = localStorage.getItem('vk_auth_state');
//     console.log("Сохраненный state:", savedState);
    
//     // Очищаем сохраненный state
//     localStorage.removeItem('vk_auth_state');

//     // Отправляем запрос для аутентификации
//     const response = await axios.get(
//       "https://anilibria.top/api/v1/accounts/users/auth/social/vk/callback",
//       {
//         params: { 
//           code,
//           state 
//         },
//         headers: {
//           'accept': 'application/json'
//         }
//       }
//     );

//     if (response.data && response.data.token) {
//       // Отправляем сообщение родительскому окну
//       window.opener?.postMessage({
//         type: 'vk_auth_success',
//         token: response.data.token
//       }, window.location.origin);
//     }
    
//     // Закрываем окно
//     window.close();
//   } catch (error) {
//     console.error("Ошибка при обработке callback VK:", error);
//     window.close();
//   }
// };
