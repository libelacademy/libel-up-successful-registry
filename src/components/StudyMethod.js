import React, { useState } from "react";
import "../css/StudyMethod.css";
import Tags from "./buttons/Tags";

import image from "../images/Imagen 10.png";
import Description from "./items/Description";
import { Item } from "./items/Item";

const clases = [
    {
        id: 0,
        title: "clases en vídeo",
        content:
            "Tendrás en vídeo para que avances semana a semana con tu aprendizaje.",
    },
    {
        id: 1,
        title: "acceso a discord",
        content:
            "Tendrás acceso a un grupo privado en Discord para que puedas interactuar con tus compañeros, subir avances y hacer preguntas al maestro.",
    },
    {
        id: 2,
        title: "feedback en vivo",
        content:
            "Tendrás reuniones en vivo con el maestro en donde podrás resolver todas tus dudas en tiempo real.",
    },
    {
        id: 3,
        title: "consideraciones importantes",
        content:
            "3 meses de feedback en vivo, Acceso al contenido por un años, Inician las clases el 10 de octubre.",
    },
];

const material = [
{id: 0,title:"material de descarga", content:"Contarás con material de referencia disponible para descargar, de modo que puedas seguir el workflow del maestro."},
{id: 1,title:"grabaciones de sesiones", content:"Todas las sesiones en vivo que se realicen quedarán grabadas pasa que puedas acceder a ellas en caso de no haber asistido en tiempo real o quieras repetirlas"},
{id: 2,title:"avances prácticos", content:"Tu compromiso es seguir cada proceso y presentar avances semanalmente para que tengas un aprendizaje rápido y fluido."},
{id: 3,title:"certificado", content:"Se entregará un certificado de cumplimiento de metas siempre y cuando entregues tus resultados y sean aprobados por el equipo de evaluación."},
]

const requirements = [
{id: 0,title:"requisitos técnicos", content:"Computadora gama media Core i5 de 8GB con tarjeta de vídeo (como mínimo), Tableta digitalizadora, Acceso a internet."},
{id: 1,title:"conocimientos previos", content:"Conocimientos básicos consolidados en ZBrush."},
{id: 2,title:"software", content:"Debes tener instalados los softwares a usar en el máster."},
]

const StudyMethod = () => {
    const [content, setContent] = useState(0);

    const handleContent = (element) => {
        setContent(element);
    };

    const itemsList = (content) => {
        switch (content) {
            case 0:
                return <Description />;

            case 1:
                return (
                    <>
                        <Item
                            key={clases[0].id}
                            title={clases[0].title}
                            content={clases[0].content}
                            color="#5454d4"
                        />
                        <Item
                            key={clases[1].id}
                            title={clases[1].title}
                            content={clases[1].content}
                            color="#77bf41"
                        />
                        <Item
                            key={clases[2].id}
                            title={clases[2].title}
                            content={clases[2].content}
                            color="#f04037"
                        />
                        <Item
                            key={clases[3].id}
                            title={clases[3].title}
                            content={clases[3].content}
                            color="#fedc5a"
                        />
                    </>
                );

            case 2:
                return (
                    <>
                        <Item
                            key={material[0].id}
                            title={material[0].title}
                            content={material[0].content}
                            color="#5454d4"
                        />
                        <Item
                            key={material[1].id}
                            title={material[1].title}
                            content={material[1].content}
                            color="#77bf41"
                        />
                        <Item
                            key={material[2].id}
                            title={material[2].title}
                            content={material[2].content}
                            color="#f04037"
                        />
                        <Item
                            key={material[3].id}
                            title={material[3].title}
                            content={material[3].content}
                            color="#fedc5a"
                        />
                    </>
                );

            case 3:
                return (
                    <>
                        <Item
                            key={requirements[0].id}
                            title={requirements[0].title}
                            content={requirements[0].content}
                            color="#5454d4"
                        />
                        <Item
                            key={requirements[1].id}
                            title={requirements[1].title}
                            content={requirements[1].content}
                            color="#77bf41"
                        />
                        <Item
                            key={requirements[2].id}
                            title={requirements[2].title}
                            content={requirements[2].content}
                            color="#f04037"
                        />
                    </>
                );

            default:
                break;
        }
    };

    return (
        <div className="StudyMethod">
            <div className="study-method-container container">
                <div className="study-method-title">
                    <h1>
                        <span>MÉTODO</span>
                        <br />
                        DE ESTUDIO
                    </h1>
                    <div className="study-method-tags">
                        <Tags
                            tag={"DESCRIPCIÓN"}
                            width={190}
                            id={0}
                            handleContent={handleContent}
                            active={content === 0 ? true : false}
                        />
                        <Tags
                            tag={"CLASES"}
                            width={140}
                            id={1}
                            handleContent={handleContent}
                            active={content === 1 ? true : false}
                        />
                        <Tags
                            tag={"MATERIAL"}
                            width={160}
                            id={2}
                            handleContent={handleContent}
                            active={content === 2 ? true : false}
                        />
                        <Tags
                            tag={"REQUISITOS"}
                            width={180}
                            id={3}
                            handleContent={handleContent}
                            active={content === 3 ? true : false}
                        />
                    </div>
                </div>
                <div className="study-method-content">
                    <div className="study-method-image">
                        <img src={image} alt="Study Method" />
                    </div>
                    <div className="study-method-items">
                        {itemsList(content)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyMethod;
