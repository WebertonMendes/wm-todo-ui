import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

import { api } from "../../services/api";
import { Logo } from "../../components/Logo";
import { Container, Form, Fields, InputGroup, Button, Link } from "./styles";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

const userLoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email("E-mail inválido")
    .required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .nullable()
    .min(6, "No mínimo 6 caracteres"),
});

export function SignIn() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(userLoginFormSchema),
  });

  const navigate = useNavigate();

  const handleUserLogin: SubmitHandler<LoginFormData> = async (data) => {
    await api.post("auth", data)
    .then((response) => {
      if (response.status === 201)
        reset();

        const token = response.data.access_token;
        localStorage.setItem("@ToDoList:token", token);

        navigate("/todo-list");
    })
    .catch((error) => {
      if (error.response?.status === 401) {
        toast("Usuário ou senha incorretos!", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          type: "error",
        });
      } else {
        toast("Erro ao autenticar o suário, contate o administrador.!", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          type: "error",
        });
      }
    });
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />

      <Logo widthImage={50} orientation={"landscape"} />

      <Form onSubmit={handleSubmit(handleUserLogin)}>
        <h2>Login</h2>

        <Fields>
          {errors.email?.message ? (
            <>
              <InputGroup>
                <MdAlternateEmail />
                <input
                  type="email"
                  placeholder="Informe o e-mail"
                  {...register("email")}
                />
              </InputGroup>
              <p className="error-msg">{errors.email?.message}</p>
            </>
          ) : (
            <>
              <InputGroup>
                <MdAlternateEmail />
                <input
                  type="email"
                  placeholder="Informe o e-mail"
                  {...register("email")}
                />
              </InputGroup>
            </>
          )}

          {errors.password?.message ? (
            <>
              <InputGroup className="input-error">
                <MdLockOutline />
                <input
                  type="password"
                  placeholder="Informe a senha"
                  {...register("password")}
                />
              </InputGroup>
              <p className="error-msg">{errors.password?.message}</p>
            </>
          ) : (
            <>
              <InputGroup>
                <MdLockOutline />
                <input
                  type="password"
                  placeholder="Informe a senha"
                  {...register("password")}
                />
              </InputGroup>
            </>
          )}
        </Fields>

        <Button type="submit">Acessar</Button>

        <Link>
          <p>Não tem uma conta?</p>
          <a href="/signup">Registre-se</a>
        </Link>
      </Form>
    </Container>
  );
}
