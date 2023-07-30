
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faSprayCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import React, { useRef } from 'react';

const opcionesServicios = [
    { value: 'ltotal', label: 'Limpieza Total' },
    { value: 'lbasica', label: 'Limpieza Básica' },
    { value: 'lexterior', label: 'Limpieza Exterior' },
    { value: 'lvidrios', label: 'Limpieza Vidrios' },
    { value: 'lpiletas', label: 'Limpieza Pileta' },
    { value: 'lplacar', label: 'Limpieza Placar' },
];

const Formulario = () => {

    const URL = 'http://localhost:4200/usuarios';

    const redirectRef = useRef();

    console.log(URL);


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            nombre: '',
            apellido: '',
            email: '',
            mensaje: '',
            servicios: [],
        }
    });

    const onSubmit = async (datos, e) => {
        e.preventDefault();
        try {
            console.log(datos);
            await axios.post(URL, datos);
        } catch (error) {
            console.log(error);
        } finally {
            e.target.reset();
        }
    };

    const handleClick = () => {
        Swal.fire({
            title: '¡Genial!',
            text: 'Nos contactaremos con usted a la brevedad',
            imageUrl: 'https://lirp.cdn-website.com/117e0b3f/dms3rep/multi/opt/Por-que-voc%C3%AA-deveria-contratar-uma-empresa-de-limpeza-profissional-BLOG-640w.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Gracias por contactarnos',
        }).then(() => {
            // Aquí realizas cualquier otra acción necesaria
            // Por ejemplo, limpiar el formulario
            reset();

            // Y luego rediriges al usuario a la página de inicio (Home)
            redirectRef.current.href = '/';
            redirectRef.current.click();
        });
    }

    /*  const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState(''); */


    return (
        <>
       <section>
        <div className="container -mt-12">
            <div className="text-center m-5">
                <h1 className="text-orange-600 text-2xl font-semibold">Formulario Servicios</h1>
                <h2 className="text-orange-600 text-lg font-semibold mb-2">Completa el formulario y selecciona el o  los servicios que necesitas:</h2>
                <div className="flex items-center justify-center space-x-4 my-4"> {/* Espacio entre h1 y h2 */}
                    <FontAwesomeIcon icon={faBroom} size="2x" className="text-green-600" /> {/* Icono de escoba */}
                    <p className="text-lg font-semibold text-orange-600">Servicios de limpieza profesionales</p> {/* Texto relacionado con limpieza */}
                    <FontAwesomeIcon icon={faSprayCan} size="2x" className="text-green-600" /> {/* Icono de spray */}
                </div>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-orange-600 text-lg font-semibold mb-3">Nombre:</label>
                        <input
                            placeholder="Nombre"
                            type="text"
                            name="nombre"
                            {...register('nombre', {
                                required: true,
                                maxLength: 50,
                            })}
                        />
                        {errors.nombre && <p className="errores">El nombre es obligatorio y con un máximo de 50 caracteres</p>}
                    </div>

                    <div>
                        <label className="text-orange-600 text-lg font-semibold mb-3">Apellido:</label>
                        <input
                            placeholder="Apellido"
                            type="text"
                            name="apellido"
                            {...register('apellido', {
                                required: true,
                                maxLength: 80,
                            })}
                        />
                        {errors.apellido && <p className="errores">El apellido es obligatorio y con un máximo de 80 caracteres</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-orange-600 text-lg font-semibold mt-3">Email:</label>
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            {...register('email', {
                                required: true,
                                // eslint-disable-next-line no-useless-escape
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                        />
                        {errors.email && <p className="errores">El email es obligatorio</p>}
                    </div>

                    <div>
                        <label className="text-orange-600 text-lg font-semibold mt-3">Mensaje:</label>
                        <input
                            placeholder="Mensaje"
                            type="text"
                            name="mensaje"
                            {...register('mensaje', {
                                required: true,
                            })}
                        />
                    </div>

                </div>

                <div className="mt-5 ">
                    <h2 className="text-orange-600 text-lg font-semibold pb-2 text-center">Servicios Disponibles:</h2>
                    <div className="grid grid-cols-3 gap-4 mt-2 ">
                        {opcionesServicios.map(opcion => (
                            <label key={opcion.value} className="justify-center items-center inline-flex text-orange-600">
                                <input
                                    type="checkbox"
                                    name="servicios"
                                    value={opcion.value}
                                    {...register('servicios', {
                                        required: true,
                                        validate: value => value.length > 0,
                                    })}
                                    className="form-checkbox h-5 w-5 text-green-600"
                                />
                                <span className="ml-2">{opcion.label}</span>
                            </label>
                        ))}
                    </div>
                    {errors.servicios && <p className="errores mt-2">Selecciona al menos un servicio</p>}
                </div>

                <div className="centrar mt-5">
                    <Button type="submit" onClick={handleClick} positive>
                        Enviar Datos
                    </Button>

                    <a ref={redirectRef} style={{ display: 'none' }} href="/"></a>
                </div>
            </Form>
        </div>
        </section>
        </>
    );
    
};

export default Formulario;