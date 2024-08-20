import { Button, Label, Fieldset, Input, Form, Titulo } from "../../components";
import { useForm } from "react-hook-form";

interface FormImputTipos {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  senhaVerificada: string;
}

const CadastroPessoal = () => {
  const { register, handleSubmit } = useForm<FormImputTipos>();

  const aoSubmeter = (dados: FormImputTipos) => {
    console.log(dados);
  };
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
            {...register("nome")}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <Input
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            {...register("email")}
          />
        </Fieldset>

        <Fieldset>
          <Label>Telefone</Label>
          <Input
            id="campo-telefone"
            type="text"
            placeholder="Ex: (DDD) XXXXX-XXXX"
            {...register("telefone")}
          />
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha">Crie uma senha</Label>
          <Input
            id="campo-senha"
            placeholder="Crie uma senha"
            type="password"
            {...register("senha")}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-senha-confirmacao">Repita a senha</Label>
          <Input
            id="campo-senha-confirmacao"
            placeholder="Repita a senha anterior"
            type="password"
            {...register("senhaVerificada")}
          />
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
