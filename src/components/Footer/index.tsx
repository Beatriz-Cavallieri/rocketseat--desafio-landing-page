import React from "react";
import Conteudo, { Assinatura, Atribuicao, Lista } from "./styles";
import { FiLinkedin, FiMail, FiGithub, FiCodepen, FiCode } from 'react-icons/fi'
import Contato from "../Contato";

const Footer: React.FC = () => {
    const links = [
        {
            link: "mailto:bfcavallieri@gmail.com",
            icone: FiMail,
        },
        {
            link: "https://linkedin.com/in/Beatriz-Cavallieri",
            icone: FiLinkedin,
        },
        {
            link: "https://github.com/Beatriz-Cavallieri",
            icone: FiGithub,
        },
        {
            link: "https://codepen.com/Beatriz-Cavallieri",
            icone: FiCodepen,
        },
    ]
    return (
        <>
            <Conteudo>
                <Lista className="lista-contatos">
                    {links.map(link => (
                        <Contato link={link.link} icone={link.icone} />
                        ))}
                </Lista>
                <Assinatura>Beatriz Cavallieri, 2020</Assinatura>
                <br />
                <Atribuicao>
                    {"Foto: "}
                    <a href="https://pixabay.com/users/miniformat65-87415/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=233095">
                        miniformat65
        </a>{" "}em{" "}
                    <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=233095">
                        Pixabay
        </a>
                </Atribuicao>
            </Conteudo>
        </>
    )
}

export default Footer;
