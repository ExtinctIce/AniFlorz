import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { FaVk } from "react-icons/fa6";
import loginBackground from "../../assets/newani.webp";
// import { handleLoginGoogle } from "../../../shared/api/signAccount/auth-google";
// import { handleLoginVk } from "../../../shared/api/signAccount/auth-vk";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(${loginBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/30 backdrop-blur-[2px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Войти</h2>
            <div className="">
              <Link to={"/"}>Главная</Link>
            </div>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Логин"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition"
              />
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="password"
                placeholder="Пароль"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  "Войти"
                )}
              </button>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // handleLoginVk();
                  }}
                  type="button"
                  className="flex-1 bg-gradient-to-r from-blue-500/80 via-blue-400/70 to-blue-600/30 hover:from-blue-600/40 hover:via-blue-500/40 hover:to-blue-700/40 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaVk className="w-5 h-5" />
                  Vk
                </button>
                <button
                  // onClick={handleLoginGoogle}
                  type="button"
                  className="flex-1 bg-gradient-to-r from-red-500/30 to-pink-500/30 hover:from-red-500/40 hover:to-pink-500/40 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <BsGoogle className="w-5 h-5" />
                  Google
                </button>
              </div>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-300">
              У вас ещё нет аккаунта?
              <Link
                to="/register"
                className="text-pink-800 hover:text-pink-600 font-semibold duration-150"
              >
                Зарегистрироваться
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 text-center text-white/60 text-sm cursor-pointer"
      >
        <span className="text-white/60 mr-2">
          Наша политика конфиденциальности и условия использования
        </span>
        <span className="text-pink-200 hover:text-pink-300 font-semibold duration-150">
          Anilibria API
        </span>
      </motion.div>
    </div>
  );
});

export default Login;
