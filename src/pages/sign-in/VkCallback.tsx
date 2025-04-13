// import { useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { handleVkCallback } from '../../shared/api/signAccount/auth-vk';
// import axios from 'axios';
// import { storeAuth } from '../../shared/store/store-auth/store-auth';

// export const VkCallback = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const processAuth = async () => {
//       try {
//         const code = searchParams.get('code');
//         const state = searchParams.get('state');

//         if (!code || !state) {
//           console.error('Отсутствуют необходимые параметры code или state');
//           navigate('/login');
//           return;
//         }

//         // Отправляем запрос для аутентификации
//         const response = await axios.get(
//           "https://anilibria.top/api/v1/accounts/users/auth/social/vk/callback",
//           {
//             params: {
//               code,
//               state
//             },
//             headers: {
//               'accept': 'application/json'
//             }
//           }
//         );

//         console.log("Ответ от сервера при callback:", response.data);

//         if (response.data && response.data.token) {
//           // Сохраняем токен
//           localStorage.setItem('auth_token', response.data.token);

//           // Получаем данные пользователя
//           const userResponse = await axios.get(
//             "https://anilibria.top/api/v1/accounts/users/me",
//             {
//               headers: {
//                 'Authorization': `Bearer ${response.data.token}`,
//                 'accept': 'application/json'
//               }
//             }
//           );

//           if (userResponse.data) {
//             // Сохраняем данные пользователя
//             localStorage.setItem('user_data', JSON.stringify(userResponse.data));
//             localStorage.setItem('isAuth', 'true');

//             // Устанавливаем состояние авторизации
//             storeAuth.setIsAuth(true);
//             storeAuth.setUserData(userResponse.data);

//             console.log("Данные пользователя получены:", userResponse.data);

//             // Редирект на главную страницу
//             navigate('/');
//           }
//         } else {
//           throw new Error('Не удалось получить токен авторизации');
//         }
//       } catch (error) {
//         console.error('Ошибка при обработке callback:', error);
//         navigate('/login');
//       }
//     };

//     processAuth();
//   }, [searchParams, navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-white text-xl">
//         Выполняется вход...
//       </div>
//     </div>
//   );
// };
