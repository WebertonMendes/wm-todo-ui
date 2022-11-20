import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAlternateEmail, MdLock, MdLockOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Form,
  Fields,
  InputGroup,
  Button,
} from "../SignIn/styles";
import { Link } from "./styles";
import { api } from "../../services/api";
import { Logo } from "../../components/Logo";

interface CreateUserFormData {
  email: string;
  password: string;
  confirm_password?: string;
};

const createUserFormSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email("E-mail inválido")
    .required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .when("confirm_password", {
      is: (value: string) => value?.length,
      then: (rule) => rule.min(6, "No mínimo 6 caracteres"),
    }),
  confirm_password: yup
    .string()
    .required("Senha obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});

export function SignUp() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    const data = {
      email: values.email,
      password: values.password,
    }

    await api.post("users", data)
    .then((response) => {
      if (response.status === 201)
        reset();

        toast("Usuário criado com sucesso!", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          type: "success",
        });
    })
    .catch((error) => {
      if (error.response?.status === 409) {
        toast("Usuário já cadastrado!", {
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
        toast("Erro ao criar o usuário, contate o administrador.!", {
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

      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <h2>Registre-se</h2>

        <Fields>
          {errors.email?.message ? (
            <>
              <InputGroup className="input-error">
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

          {errors.confirm_password?.message ? (
            <>
              <InputGroup className="input-error">
                <MdLock />
                <input
                  type="password"
                  placeholder="Confirmação da senha"
                  {...register("confirm_password")}
                />
              </InputGroup>
              <p className="error-msg">{errors.confirm_password?.message}</p>
            </>
          ) : (
            <>
              <InputGroup>
                <MdLock />
                <input
                  type="password"
                  placeholder="Confirmação da senha"
                  {...register("confirm_password")}
                />
              </InputGroup>
            </>
          )}
        </Fields>

        <Button type="submit">Cadastrar</Button>

        <Link>
          <a href="/">Voltar para o Login</a>
        </Link>
      </Form>
    </Container>
  );
}
