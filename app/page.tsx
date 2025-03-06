// pages/index.js
'use client';
import Head from 'next/head';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>PetCannabis - Óleo de Cannabis para Pets</title>
                <meta name="description" content="Instituto especializado em produção de óleo de cannabis para tratamento de pets" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar */}
            <nav className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="PetCannabis Logo" className="h-10 w-auto" />
                        <span className="ml-2 text-xl font-bold text-green-800">PetCannabis</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-green-800 hover:text-green-600 font-medium">Home</a>
                        <a href="#instituto" className="text-green-800 hover:text-green-600 font-medium">Instituto</a>
                        <a href="#sobre-oleo" className="text-green-800 hover:text-green-600 font-medium">Sobre o Óleo</a>
                        <a href="#contato" className="text-green-800 hover:text-green-600 font-medium">Contato</a>
                    </div>
                    <button className="md:hidden focus:outline-none">
                        <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Hero/Banner Section */}
            <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 to-green-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Tratamento Natural para o Bem-estar do seu Pet</h1>
                            <p className="text-lg text-gray-700 mb-6">Descubra os benefícios do óleo de cannabis para cães e gatos. Proporcionando qualidade de vida e alívio para seu melhor amigo.</p>
                            <div className="flex space-x-4">
                                <a href="#contato" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">Saiba Mais</a>
                                <a href="#sobre-oleo" className="px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition duration-300">Benefícios</a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/hero-image.jpg" alt="Pet saudável após tratamento" className="rounded-xl shadow-lg w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Instituto Section */}
            <section id="instituto" className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nosso Instituto</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src="/instituto.jpg" alt="Instituto PetCannabis" className="rounded-xl shadow-lg w-full h-auto" />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Pioneiros no Tratamento Natural</h3>
                            <p className="text-gray-700 mb-4">
                                O Instituto PetCannabis nasceu da paixão por proporcionar tratamentos naturais e eficazes para pets que sofrem com diversas condições. Fundado em 2020, somos pioneiros no desenvolvimento de produtos à base de cannabis especialmente formulados para animais de estimação.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Nossa equipe é formada por veterinários, farmacêuticos e biólogos dedicados à pesquisa e desenvolvimento de soluções que melhoram a qualidade de vida dos animais. Trabalhamos com cultivo próprio e controlado, garantindo a pureza e potência de nossos produtos.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="text-green-600 font-bold text-xl mb-1">5+ Anos</div>
                                    <div className="text-gray-600">de pesquisa</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="text-green-600 font-bold text-xl mb-1">10.000+</div>
                                    <div className="text-gray-600">pets atendidos</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="text-green-600 font-bold text-xl mb-1">98%</div>
                                    <div className="text-gray-600">de satisfação</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="text-green-600 font-bold text-xl mb-1">15+</div>
                                    <div className="text-gray-600">profissionais</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre o Óleo Section */}
            <section id="sobre-oleo" className="py-16 bg-green-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Sobre o Óleo de Cannabis</h2>
                    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                        <p className="text-gray-700 mb-4">
                            O óleo de cannabis é um produto natural extraído da planta Cannabis sativa, rico em canabinoides, como o CBD (canabidiol), que possuem propriedades terapêuticas amplamente estudadas. Quando utilizado corretamente, pode auxiliar no bem-estar e na qualidade de vida de cães e gatos, trazendo benefícios como alívio da dor, redução da ansiedade, melhora na mobilidade e suporte ao sistema imunológico.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Nosso óleo é desenvolvido com foco na segurança e eficácia, seguindo rigorosos padrões de qualidade para garantir um produto puro, seguro e livre de substâncias prejudiciais aos animais. Cada fórmula é cuidadosamente elaborada para atender às necessidades específicas de cães e gatos, proporcionando um tratamento natural e eficaz.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Se você deseja proporcionar mais conforto e qualidade de vida ao seu pet, conheça os benefícios do óleo de cannabis e consulte um profissional para entender como ele pode ser integrado ao cuidado do seu animal.
                        </p>

                        <h3 className="text-xl font-semibold text-green-700 mb-4">Benefícios para seu Pet</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-green-50 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-medium text-green-700 mb-2">Alívio da Dor</h4>
                                <p className="text-gray-600">Ajuda a reduzir dores crônicas, inflamações e desconforto em pets idosos ou com condições específicas.</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-medium text-green-700 mb-2">Redução da Ansiedade</h4>
                                <p className="text-gray-600">Auxilia pets com ansiedade de separação, fobias e estresse, promovendo um comportamento mais calmo.</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-medium text-green-700 mb-2">Suporte Imunológico</h4>
                                <p className="text-gray-600">Ajuda a fortalecer o sistema imunológico, promovendo uma melhor saúde geral para seu animal.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <a href="#contato" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">Consultar um Especialista</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produtos Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nossos Produtos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-48 bg-green-100 flex items-center justify-center">
                                <img src="/product-1.jpg" alt="Óleo de CBD para Cães" className="h-full w-auto object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">Óleo de CBD para Cães</h3>
                                <p className="text-gray-600 mb-4">Especialmente formulado para as necessidades dos cães, com concentração adequada e sabor que facilita a administração.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-600 font-bold">R$ 129,90</span>
                                    <a href="#contato" className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition duration-300">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-48 bg-green-100 flex items-center justify-center">
                                <img src="/product-2.jpg" alt="Óleo de CBD para Gatos" className="h-full w-auto object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">Óleo de CBD para Gatos</h3>
                                <p className="text-gray-600 mb-4">Formulação específica para felinos, considerando seu metabolismo único e com dosagem precisa para máxima eficácia.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-600 font-bold">R$ 119,90</span>
                                    <a href="#contato" className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition duration-300">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-48 bg-green-100 flex items-center justify-center">
                                <img src="/product-3.jpg" alt="Kit Completo para Pets" className="h-full w-auto object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">Kit Completo para Pets</h3>
                                <p className="text-gray-600 mb-4">Inclui óleo de CBD, guia de dosagem, pipeta medidora e acesso a consulta online com um de nossos especialistas.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-600 font-bold">R$ 199,90</span>
                                    <a href="#contato" className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition duration-300">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">O que nossos clientes dizem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full overflow-hidden mr-4">
                                    <img src="/testimonial-1.jpg" alt="Cliente" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-700">Marina Silva</h4>
                                    <p className="text-gray-500 text-sm">Tutora de Luna, 8 anos</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Minha cachorra sofria com artrite e tinha dificuldade para se movimentar. Após começar o tratamento com o óleo de CBD, percebi uma melhora significativa na mobilidade e disposição dela. Estou muito satisfeita!"
                            </p>
                            <div className="flex mt-4 text-yellow-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full overflow-hidden mr-4">
                                    <img src="/testimonial-2.jpg" alt="Cliente" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-700">Carlos Mendes</h4>
                                    <p className="text-gray-500 text-sm">Tutor de Thor, 4 anos</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Meu cão sofria com ansiedade de separação e destruía tudo quando eu saía. O óleo de CBD tem ajudado muito a acalmá-lo. Agora ele fica tranquilo mesmo quando estou fora de casa. Recomendo!"
                            </p>
                            <div className="flex mt-4 text-yellow-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full overflow-hidden mr-4">
                                    <img src="/testimonial-3.jpg" alt="Cliente" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-700">Beatriz Oliveira</h4>
                                    <p className="text-gray-500 text-sm">Tutora de Nina, 12 anos</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Minha gata idosa tinha problemas de apetite e dores nas articulações. Depois de começar com o óleo de CBD, ela está mais ativa e voltou a comer normalmente. A equipe do instituto é muito atenciosa e me orientou durante todo o processo."
                            </p>
                            <div className="flex mt-4 text-yellow-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contato Section */}
            <section id="contato" className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Entre em Contato</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2 bg-green-50 rounded-xl p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-green-700 mb-4">Fale Conosco</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Seu nome" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="seu@email.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="(00) 00000-0000" />
                                </div>
                                <div>
                                    <label htmlFor="pet" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Pet</label>
                                    <select id="pet" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                                        <option value="">Selecione</option>
                                        <option value="dog">Cão</option>
                                        <option value="cat">Gato</option>
                                        <option value="other">Outro</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Como podemos ajudar?"></textarea>
                                </div>
                                <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">Enviar Mensagem</button>
                            </form>
                        </div>
                        <div className="md:w-1/2 bg-white rounded-xl p-6 md:p-8 shadow-md">
                            <h3 className="text-xl font-semibold text-green-700 mb-6">Informações de Contato</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-green-700">Endereço</h4>
                                        <p className="text-gray-600 mt-1">Av. das Plantas Medicinais, 1234<br />Jardim Botânico - São Paulo, SP<br />CEP: 04123-000</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-green-700">Telefone</h4>
                                        <p className="text-gray-600 mt-1">(11) 3456-7890</p>
                                        <p className="text-gray-600">Whatsapp: (11) 98765-4321</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-green-700">Email</h4>
                                        <p className="text-gray-600 mt-1">contato@petcannabis.com.br</p>
                                        <p className="text-gray-600">suporte@petcannabis.com.br</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-green-700">Horário de Atendimento</h4>
                                        <p className="text-gray-600 mt-1">Segunda a Sexta: 9h às 18h</p>
                                        <p className="text-gray-600">Sábado: 9h às 13h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg font-medium text-green-700 mb-4">Siga-nos nas Redes Sociais</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition duration-300">
                                        <FaInstagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition duration-300">
                                        <FaFacebook className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition duration-300">
                                        <FaTwitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white pt-12 pb-6">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">PetCannabis</h4>
                            <p className="text-green-100 mb-4">Tratamento natural para melhorar a qualidade de vida do seu pet.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-green-200 hover:text-white transition duration-300">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-green-200 hover:text-white transition duration-300">
                                    <FaFacebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-green-200 hover:text-white transition duration-300">
                                    <FaTwitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-green-200 hover:text-white transition duration-300">Home</a></li>
                                <li><a href="#instituto" className="text-green-200 hover:text-white transition duration-300">Instituto</a></li>
                                <li><a href="#sobre-oleo" className="text-green-200 hover:text-white transition duration-300">Sobre o Óleo</a></li>
                                <li><a href="#contato" className="text-green-200 hover:text-white transition duration-300">Contato</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Produtos</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-green-200 hover:text-white transition duration-300">Óleo para Cães</a></li>
                                <li><a href="#" className="text-green-200 hover:text-white transition duration-300">Óleo para Gatos</a></li>
                                <li><a href="#" className="text-green-200 hover:text-white transition duration-300">Kit Completo</a></li>
                                <li><a href="#" className="text-green-200 hover:text-white transition duration-300">Guia de Dosagens</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Contato</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <span className="text-green-200">(11) 3456-7890</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span className="text-green-200">contato@petcannabis.com.br</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span className="text-green-200">São Paulo, SP</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-green-700 pt-6 text-center">
                        <p className="text-green-200">&copy; {new Date().getFullYear()} PetCannabis. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp flutuante */}
            <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
                <FaWhatsapp className="w-6 h-6" />
            </a>
        </div>
    );
}