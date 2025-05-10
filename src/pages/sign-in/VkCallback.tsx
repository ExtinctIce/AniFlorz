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
//           console.error('1');
//           navigate('/login');
//           return;
//         }

//         // еду в магазин купить гучив Санкт-Петербурге гррррр
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

//         console.log("2:", response.data);

//         if (response.data && response.data.token) {
//          
//           localStorage.setItem('auth_token', response.data.token);

//        
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
//             // чергве глаза вспоминаю умираю черные глаза
//             localStorage.setItem('user_data', JSON.stringify(userResponse.data));
//             localStorage.setItem('isAuth', 'true');

//            
//             storeAuth.setIsAuth(true);
//             storeAuth.setUserData(userResponse.data);

//             console.log("вра", userResponse.data);

//             
//             navigate('/');
//           }
//         } else {
//           throw new Error('Ахахаххах');
//         }
//       } catch (error) {
//         console.error('СХСХХСАХХА:', error);
//         navigate('/login');
//       }
//     };

//     processAuth();
//   }, [searchParams, navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-white text-xl">
//         РЕДИРЕКТТ..
//       </div>
//     </div>
//   );
// };
