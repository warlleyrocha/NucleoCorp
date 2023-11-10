import React from 'react';

class EmailButton extends React.Component {
  handleClick = () => {
    const email = 'nucleo.corp9@gmail.com';
    const subject = 'Assunto do Email';
    const body = 'Conteúdo do Email';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abre o cliente de email padrão com o novo email
    window.location.href = mailtoLink;
  };

  render() {
    return (
      <button className="bg-[#7C0F82] text-white uppercase rounded py-2 px-10 md:ml-[50px] hover:bg-[#bf2ec7] duration-500" onClick={this.handleClick}>
      Contact
      </button>
    );
  }
}

export default EmailButton;
