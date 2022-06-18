import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { Input, Button, Title, Checkbox } from "../components/export";
import { useUser } from "../context/UserContext";
import users from "../data/users.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Inputan Gelen Değerler
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Context Verileri
  const { setUser } = useUser();

  // Roter-Dom Sayfaya Yönlendirme
  const navigate = useNavigate();

  // Gelen Verileri Contexte Gönderme
  const submitHandle = (e) => {
    e.preventDefault();

    // Context ve Inputtan Gelen Verilerin Kontrolü
    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    );

    // Eğer Uyuşma Varsa Yönlendir ve Yazdır
    if (currentUser) {
      setUser(currentUser);
      return navigate("/", {
        replace: true,
      });
    } else {
      alert("Kullanıcı bulunamadı!");
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Title title={"Giriş Ekranı"} />
        <form className="mt-8 space-y-6" onSubmit={submitHandle}>
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              title={"Email"}
              id={"email"}
              name={"email"}
              type={"email"}
              autoComplete={"email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              title={"Şifre"}
              id={"password"}
              name={"password"}
              type={"password"}
              autoComplete={"password"}
              placeholder={"Şifre"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              title={"Beni Hatırla"}
              id={"remember-me"}
              name={"remember-me"}
              type={"checkbox"}
              htmlFor={"remember-me"}
            />
            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Şifremi Unuttum?
              </a>
            </div>
          </div>
          <Button icon={<BiLogIn />} type={"submit"} title={"Giriş Yap"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
