import {
  Button,
  Label,
  Fieldset,
  Input,
  Form,
  Titulo,
  ErrorMessage,
} from "../../components";
import { useForm } from "react-hook-form";

interface FormImputTipos {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  senhaVerificada: string;
}

const CadastroPessoal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormImputTipos>();

  const aoSubmeter = (dados: FormImputTipos) => {
    console.log(dados);
  };

  const senha = watch("senha");

  const validaSenha = {
    obrigatorio: (val: string) =>
      !!val || "Por favor, insira a senha novamente",
    tamanhoMinimo: (val: string) =>
      val.length >= 6 || "A senha deve ter pelo menos 6 caracteres",
    senhaIguais: (val: string) => val === senha || "As senhas não correspondem",
  };

  function validarEmail(valor: string) {
    const formatoEmail = /^[^\s@]+@alura\.com\.br$/;
    if (!formatoEmail.test(valor)) {
      console.error("Endereço de email é inválido para este domínio");
      return false;
    }
    return true;
  }

  return (
    <>
      <Titulo>Insira alguns dados básicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-nome">Nome</Label>
          <Input
            id="campo-nome"
            placeholder="Digite seu nome completo"
            type="text"
            $error={!!errors.nome}
            {...register("nome", {
              required: "Campo de nome é obrigatório",
              minLength: {
                value: 5,
                message: "O Nome deve ter pelo menos 5 caracteres.",
              },
            })}
          />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <Input
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            {...register("email", {
              required: "O campo de email -e obrigatório",
              validate: validarEmail,
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label>Telefone</Label>
          <Input
            id="campo-telefone"
            type="text"
            placeholder="Ex: (DDD) XXXXX-XXXX"
            {...register("telefone", {
              pattern: {
                value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
                message: "O telefone foi informado de maneira incorreta.",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          {errors.telefone && (
            <ErrorMessage>{errors.telefone.message}</ErrorMessage>
          )}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha">Crie uma senha</Label>
          <Input
            id="campo-senha"
            placeholder="Crie uma senha"
            type="password"
            {...register("senha", {
              required: "O campo de senha é obrigatório",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres.",
              },
            })}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-senha-confirmacao">Repita a senha</Label>
          <Input
            id="campo-senha-confirmacao"
            placeholder="Repita a senha anterior"
            type="password"
            {...register("senhaVerificada", {
              required: "Repita a senha",
              validate: validaSenha,
            })}
          />
          {errors.senhaVerificada && (
            <ErrorMessage>{errors.senhaVerificada.message}</ErrorMessage>
          )}
        </Fieldset>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroPessoal;

// const [nome, setNome] = useState("");
// const [email, setEmail] = useState("");
// const [telefone, setTelefone] = useState("");
// const [senha, setSenha] = useState("");
// const [senhaVerificada, setSenhaVerificada] = useState("");

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   console.log({ nome, email, senha, telefone, senhaVerificada });
// };
