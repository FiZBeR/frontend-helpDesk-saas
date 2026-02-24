import { useState, useContext } from "react";
import { replace, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css"

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMsg("");

      const success = await login(username, password);

      if (success) {
        navigate("/dashboard", { replace: true });
      } else {
        setErrorMsg(
          "Credenciales inválidas o servidor caído. Revisa la consola."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = () => {
    console.log(username + " " + password);
  };

  return (
    <section className="main">
      <div className="relative w-full max-w-120 px-4">
        {/*Login Card */}
        <div className="w-full flex flex-col rounded-xl bg-[#191e33]/90 backdrop-blur-sm border border-[#323b67] shadow-2xl p-8 sm:p-10">
          {/* Header / Logo Area*/}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-4xl">
                admin_panel_settings
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Admin Portal
            </h1>
            <p className="mt-2 text-sm text-[#929bc9]">
              Secure login for hardware &amp; ticket management
            </p>
          </div>
          {/* Form */}
          <form
            action="#"
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            {/*¨Email Input*/}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-white">
                Email or Username
              </span>
              <div className="group relative flex w-full items-center">
                <input
                  className="peer w-full rounded-lg border border-[#323b67] bg-[#111422] py-3.5 pl-4 pr-12 text-base text-white placeholder-[#5a648c] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="name@company.com"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
                <span className="material-symbols-outlined absolute right-4 text-[#929bc9] transition-colors peer-focus:text-primary">
                  person
                </span>
              </div>
            </label>
            {/* Password Input*/}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-white">Password</span>
              <div className="group relative flex w-full items-center">
                <input
                  className="peer w-full rounded-lg border border-[#323b67] bg-[#111422] py-3.5 pl-4 pr-12 text-base text-white placeholder-[#5a648c] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <span className="material-symbols-outlined absolute right-4 text-[#929bc9] cursor-pointer hover:text-white transition-colors peer-focus:text-primary">
                  visibility_off
                </span>
              </div>
            </label>
            {/*Remember Me & Forgot Password*/}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2 select-none">
                <input
                  className="custom-checkbox h-4 w-4 rounded border-[#323b67] bg-[#111422] text-primary checked:border-primary checked:bg-primary focus:ring-offset-0 focus:ring-primary/20 transition-all"
                  type="checkbox"
                />
                <span className="text-sm font-medium text-[#929bc9] hover:text-white transition-colors">
                  Remember me
                </span>
              </label>
              <a
                className="text-sm font-medium text-primary hover:text-[#4c6ef5] transition-colors"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            {/* Submit Button */}
            <button
              className="mt-2 flex w-full items-center justify-center rounded-lg bg-primary py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-[#3b5bf6] active:scale-[0.98] transition-all duration-200"
              type="submit"
            >
              Login
            </button>
          </form>
          {/* Footer Link */}
          <div className="mt-8 text-center text-sm text-[#929bc9]">
            Don't have an account?
            <a
              className="font-medium text-white hover:text-primary hover:underline transition-colors"
              href="#"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
