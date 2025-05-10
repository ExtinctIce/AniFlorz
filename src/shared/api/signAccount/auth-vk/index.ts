// import axios from "axios";
// import { storeAuth } from "../../../store/store-auth/store-auth";

// export const handleLoginVk = async () => {
//   try {
//     console.log("VK...");
    
//     const loginUrl = "https://anilibria.top/api/v1/accounts/users/auth/social/vk/login";
//     console.log("запрос:", loginUrl);
    
//     const response = await axios.get(loginUrl, {
//       params: {
//         redirect_uri: "https://www.anilibria.top/api/v1/accounts/users/auth/social/vk/callback"
//       },
//       headers: {
//         accept: "application/json",
//       },
//     });

//     console.log("ответ:", response.data);

//     if (response.data && response.data.url) {
//       console.log("URL:", response.data.url);
//       console.log("Параметры ответа:", {
//         url: response.data.url,
//         state: response.data.state,
//         redirect_uri: response.data.redirect_uri
//       });
      
//       // вкдляпидоразов
//       if (response.data.state) {
//         localStorage.setItem("vk_auth_state", response.data.state);
//         console.log("State сохранен:", response.data.state);
//       } else {
//         console.warn("State не получен в ответе");
//       }
      
//       // окно авторизации VK от рутов, ибо нихуя не ясно что оно перенаправляет.
//       console.log(" окно авторизации...");
//       const width = 800;
//       const height = 600;
//       const left = (window.screen.width - width) / 2;
//       const top = (window.screen.height - height) / 2;
      
//       const authWindow = window.open(
//         response.data.url,
//         'VK Auth',
//         `width=${width},height=${height},top=${top},left=${left}`
//       );

//       
//       window.addEventListener('message', async function(event) {
//         if (event.origin !== window.location.origin) return;
        
//         if (event.data.type === 'vk_auth_success' && event.data.token) {
//          
//           authWindow?.close();
          
//           
//           localStorage.setItem('auth_token', event.data.token);
          
//          
//           storeAuth.setIsAuth(true);

//           try {
//             
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
//               console.log("Данны:", userResponse.data);
//             }
//           } catch (error) {
//             console.error("Ошибка при получении данных пользователя:", error);
//           }
//         }
//       });
//     } else {
//       console.error("отсутствует URL:", response.data);
//       throw new Error('Не удалось получить URL для авторизации вээка');
//     }
//   } catch (error) {
//     console.error("Ошибка при авторизации через вээка:", error);
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

// // 
// export const handleVkCallback = async (code: string, state: string) => {
//   try {
//     console.log("лдотьдш callback:", { code, state });
    
//     
//     const savedState = localStorage.getItem('vk_auth_state');
//     console.log("стейт:", savedState);
    
//
//     localStorage.removeItem('vk_auth_state');

//    
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
//      
//       window.opener?.postMessage({
//         type: 'vk_auth_success',
//         token: response.data.token
//       }, window.location.origin);
//     }
    
//    
//     window.close();
//   } catch (error) {
//     console.error("Ошибка VK:", error);
//     window.close();
//   }
// };
