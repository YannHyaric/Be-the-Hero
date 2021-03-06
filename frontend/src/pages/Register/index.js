import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/Logo.png";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function Register() {

  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [endereco, setEndereco] = useState('');
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome,
      email,
      whatsapp,
      endereco
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID é ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert("Erro no cadastro" + err);
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Logo" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Name"
            value={nome}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <input
            placeholder="Endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
