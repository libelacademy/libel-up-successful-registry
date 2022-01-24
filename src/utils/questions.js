const questions = [
    {
        id: 0,
        question: "¿Cómo es la metodología de estudio en Libel Academy?",
        answer: (
            <div>
                Tenemos tres metodologías:{" "}
                <ul style={{ paddingLeft: 30 }}>
                    <li>En vivo.</li>
                    <li>Escuelas</li>
                    <li>A tu ritmo</li>
                </ul>
                Consulta lo que ofrecemos en cada metodología dando click en el
                menú superior <b>“Oferta académica”</b>
            </div>
        ),
    },
    {
        id: 1,
        question: "¿Dónde se ven las clases?",
        answer: (
            <div>
                <p style={{ marginBottom: 10 }}>
                    Todos los cursos en los que estás inscritos aparecerán en tu
                    perfil, sección “mi portal”, es por ello por lo que debes
                    crear un perfil en nuestra plataforma de estudio:{" "}
                    <a href="https://cursos.libel.academy/users/sign_up">
                        https://cursos.libel.academy/users/sign_up
                    </a>
                </p>
                <p>
                    Las clases en vivo se realizan por Zoom y el acceso a ellas
                    se envía a través del grupo en Discord del curso en el cual
                    estés inscrito. Las grabaciones de las clases en vivo
                    también aparecerán en tu perfil 24 horas hábiles después de
                    cada clase en vivo.
                </p>
            </div>
        ),
    },
    {
        id: 2,
        question:
            "Si el día de inicio del curso/máster no he recibido ningún acceso ¿Qué debo hacer?",
        answer: (
            <div>
                <ol style={{ paddingLeft: 30 }}>
                    <li>
                        Asegúrate de haber llenado el formulario de inscripción,
                        si no lo has hecho, contacta a la asesora que te
                        acompañó durante el proceso de pago para que te envíe el
                        formulario.
                    </li>
                    <li>
                        Revisa tu correo en todas las carpetas para verificar si
                        en efecto no te enviaron los accesos
                    </li>
                    <li>
                        Escribe a info@libel.academy solicitando el acceso y
                        adjuntando el comprobante de pago del curso/máster
                    </li>
                </ol>
                <b>NOTA:</b> Recuerda que los accesos se envían 2 días antes de
                iniciar el curso/máster
            </div>
        ),
    },
    {
        id: 3,
        question:
            "¿Qué hacer si tengo problemas con el uso de la plataforma, el registro o la visualización de los cursos?",
        answer: (
            <div>
                Escribe un correo a soporte@libelstudios.com para que puedan
                ayudarte. Recuerda que el horario de soporte es de lunes a
                viernes de 9:00 am a 1:00 pm, hora Colombia. La respuesta a tu
                solicitud puede tardar entre 2 y 3 días hábiles. Agradecemos que
                seas paciente.
            </div>
        ),
    },
    {
        id: 4,
        question: "¿Qué tipo de certificado se obtiene?",
        answer: (
            <div>
                A excepción del contenido gratuito, todos nuestros
                cursos/másteres/talleres son certificados. Se entrega un
                certificado de cumplimiento de metas si tus resultados son
                aprobados.
            </div>
        ),
    },
    {
        id: 5,
        question:
            "¿Proporcionan las licencias de los softwares que se usan en los cursos?",
        answer: (
            <div>
                Las únicas licencias que tenemos disponibles para entregar y/o
                vender son las licencias de Reallusion (Character Creator,
                Iclone, Headshot…) y licencias de ZBrush. Más información en el
                menú, sección Licencias.
            </div>
        ),
    },
    {
        id: 6,
        question: "¿Cuál es la diferencia entre un máster y un curso en vivo?",
        answer: (
            <div>
                Los másteres incluyen diferentes temas, diferentes softwares,
                cursos complementarios en vídeo y un nivel intermedio-avanzado,
                los cursos se centran en un único tema y software con un nivel
                básico-intermedio.
            </div>
        ),
    },
    {
        id: 7,
        question: "¿¿Qué medios de pago tienen??",
        answer: (
            <div>
                Puedes pagar con PayU (Transferencia bancaria, PSE, Nequi,
                tarjeta débito/crédito, Efecty, y Baloto), PayPal, Western Union
                y Tarjeta crédito. Recuerda que PayPal no está disponible para
                Colombia.
            </div>
        ),
    },
    {
        id: 8,
        question: "¿Tienen planes de financiación?",
        answer: (
            <div>
                Sí, tenemos planes de financiación sin interés, en nuestros
                cursos en vivo y másteres en vivo. Para acceder a esta opción,
                <a href="https://calendly.com/libel">
                    solicita una asesoría aquí.
                </a>
            </div>
        ),
    },
    {
        id: 9,
        question: "¿Cuál es el horario de atención de Libel Academy?",
        answer: (
            <div>
                Nuestros <b>canales de atención administrativa</b> están
                abiertos en los siguientes horarios: Lunes a viernes: 8:00 am a
                5:00 pm, hora Colombia Sábado: 8:00 am a 11:00 am, hora Colombia
                Domingos y festivos (calendario colombiano) no hay atención
                Nuestro <b>canal de soporte</b> está abierto en los siguientes
                horarios: Lunes a viernes: 9:00 am a 1:00 pm, hora Colombia
                Sábados, domingos y festivos (calendario colombiano) no hay
                atención. Los <b>canales de venta</b> generalmente tienen un
                horario extendido del horario administrativo, sin embargo, la
                respuesta podría tardar un poco más si escribes después de las 6
                pm, los sábados en la tarde o los domingos (tiempo de Colombia).
                Las <b>asesorías a estudiantes o aspirantes</b> pueden agendarse
                en un horario diferente al horario administrativo. Consulta el
                calendario de asesorías para revisar los diferentes horarios
                disponibles. (Dirigir al módulo de agendar asesoría) Los
                <b>horarios de clases, conferencias y/o eventos</b> no
                corresponden a los horarios mencionados{" "}
                <a href="https://calendly.com/libel">en este apartado.</a>
            </div>
        ),
    },
];

export default questions;
