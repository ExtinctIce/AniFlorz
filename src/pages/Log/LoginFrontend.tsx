import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Loginfrontend = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-950">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mr-3 font-bold text-2xl"></div>
        <div className="p-8 rounded shadow-md w-full max-w-md border border-neutral-900 bg-neutral-900">
          {/* Google */}
          <form className="space-y-3">
            <div className="">
              <input
                type="text"
                className="w-full rounded-xl border bg-transparent px-3 py-[0.32rem] border-neutral-800 text-white" /* Сделал текст белым */
                placeholder="Логин"
              />
            </div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                type="password"
                className="peer border-neutral-800 block min-h-[auto] w-full rounded-xl border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Password"
              />
              <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
                Пароль
              </label>
            </div>
          </form>
          <button className="w-full mt-5 rounded-xl font-semibold py-2 bg-purple-900 text-white">
            Войти
          </button>
          <Link to="/register">
            <button className="w-full mt-3 rounded-xl font-semibold py-2 bg-neutral-800 text-white">
              Зарегестрироваться
            </button>
          </Link>
          <p className="text-center text-neutral-400 mt-4">
            Входя в аккаунт на сайте вы соглашаетесь с нашей политикой
            конфиденциальности
          </p>
        </div>
        <button className="w-full mt-2 rounded-xl font-semibold py-2 bg-white-900 border text-white flex justify-center items-center">
          <FaGoogle className="text-xl mr-5" /> Войти с помощью Google
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

export default Loginfrontend;

{
  /* <div className="relative" data-twe-input-wrapper-init>
            <input
              type="password"
              className="peer border-neutral-800 block min-h-[auto] w-full rounded-xl border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Password"
            />
            <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Пароль
            </label>
          </div> */
}

{
  /* <form>
  <div className="relative mb-4" data-twe-input-wrapper-init>
    <input
      type="text"
      className="peer block min-h-[auto] w-full rounded border-spacing-3 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
      placeholder="Username"
    />
    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
      Email address
    </label>
  </div>

  <div className="relative mb-4" data-twe-input-wrapper-init>
    <input
      type="password"
      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleFormControlInput11"
      placeholder="Password"
    />
    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
      Password
    </label>
  </div>

  <div className="mb-12 pb-1 pt-1 text-center">
    <button
      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
    >
      Sign up
    </button>
  </div>

  <div className="flex items-center justify-between pb-6">
    <p className="mb-0 me-2">Have an account?</p>
    <button
      type="button"
      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
      data-twe-ripple-init
      data-twe-ripple-color="light"
    >
      Login
    </button>
  </div>
</form>; */
}
