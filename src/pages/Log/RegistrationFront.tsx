import { FaGoogle } from "react-icons/fa";


const RegistrationFrontend = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-950">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mr-3 font-bold text-2xl"></div>
        <div className="p-8 rounded shadow-md w-full max-w-md border border-neutral-900 bg-neutral-900">
          <form className="space-y-3">
            <div className="">
              <input
                type="text"
                className="w-full rounded-xl border bg-transparent px-3 py-[0.32rem] border-neutral-800 text-white" 
                placeholder="Логин"
              />
            </div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                type="password"
                className="peer border-neutral-800 block min-h-[auto] w-full rounded-xl border bg-transparent px-3 py-[0.32rem] text-white" 
                placeholder="Пароль"
              />
            </div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                type="password"
                className="border-neutral-800 block min-h-[auto] w-full rounded-xl border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none text-white" 
                placeholder="Повтор пароля"
              />
            </div>
          </form>
          <button className="w-full mt-5 rounded-xl font-semibold py-2 bg-purple-900 text-white">
            Зарегестрироваться
          </button>
          <p className="text-center text-neutral-400 mt-4">
            Регистрируя аккаунт на сайте вы соглашаетесь с нашей политикой
            конфиденциальности
          </p>
        </div>
        <button className="w-full mt-2 rounded-xl font-semibold py-2 bg-white-900 border text-white flex justify-center items-center">
          <FaGoogle className="text-xl mr-5" /> Зарегестрироваться с помощью
          Google
        </button>
        <div className="flex justify-around w-full max-w-md mt-4">
          <button className="rounded-xl font-semibold py-2 px-4 bg-neutral-950 text-white">
            Конфиденциальность
          </button>
          <button className="rounded-xl font-semibold py-2 px-4 bg-neutral-950 text-white">
            Соглашение
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFrontend;
