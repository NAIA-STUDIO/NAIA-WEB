import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Brain, Code, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="group flex items-center space-x-2">
                <div className="rounded-full border border-black p-2 transition-transform duration-200 group-hover:scale-110">
                  <Image
                    src="/NA.IA_ICON NEGRO.png"
                    alt="Logo NA.IA"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <span className="inline-block font-bold text-black transition-transform duration-200 group-hover:text-gray-700">
                  NA.IA
                </span>
              </div>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Proyectos
              </Link>
              <Link
                href="#methodology"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Metodología
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button>Iniciar Proyecto</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 via-white to-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Soluciones Avanzadas de Inteligencia Artificial
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transformamos ideas en realidad con tecnología de vanguardia. Nuestras soluciones de IA potencian el
                    futuro de tu negocio.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Descubre Nuestros Proyectos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Contactar</Button>
                </div>
              </div>
              <Image
                src="/AI.png?height=550&width=550"
                width={550}
                height={550}
                alt="AI Technology Visualization"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Innovación en Inteligencia Artificial
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Somos una startup especializada en desarrollar soluciones de IA personalizadas que transforman la
                  manera en que las empresas operan y se conectan con sus clientes. Combinamos tecnología de vanguardia
                  con un profundo entendimiento de las necesidades empresariales.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                    <div className="rounded-full border border-black p-2">
                      <Image
                        src="/NA.IA_ICON NEGRO.png"
                        alt="Logo NA.IA"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>
                  <h3 className="text-xl font-bold">Experiencia</h3>
                  <p className="text-center text-muted-foreground">
                    Equipo de expertos en IA con amplia experiencia en proyectos innovadores
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                  <div className="rounded-full bg-green-100 p-3">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Tecnología</h3>
                  <p className="text-center text-muted-foreground">
                    Utilizamos las herramientas y frameworks más avanzados del mercado
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                  <div className="rounded-full bg-purple-100 p-3">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Personalización</h3>
                  <p className="text-center text-muted-foreground">
                    Soluciones adaptadas específicamente a las necesidades de tu negocio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            {/* Encabezado de la sección */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Proyectos Destacados
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Descubre nuestras soluciones más innovadoras en el campo de la Inteligencia Artificial
                </p>
              </div>
            </div>

            {/* Proyecto Principal */}
            <div className="mt-12 rounded-xl border bg-white p-6 shadow-lg">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/AI_Agent.png?height=400&width=600"
                  width={600}
                  height={400}
                  alt="AI Agents Visualization"
                  className="mx-auto aspect-[16/11] overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Proyecto Principal
                  </div>
                  <h3 className="text-2xl font-bold">Agentes Virtuales Inteligentes</h3>
                  <p className="text-muted-foreground">
                    Combinamos "Agentic AI" para toma de decisiones autónomas y razonamiento avanzado con "AI Agents"
                    para conectar con APIs y realizar tareas prácticas. Estos agentes virtuales pueden automatizar
                    procesos complejos, tomar decisiones basadas en datos y ejecutar acciones en tiempo real.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>Toma de decisiones autónoma basada en objetivos</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>Integración con múltiples sistemas y APIs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>Aprendizaje continuo y adaptación</span>
                    </li>
                  </ul>
                  <Button className="w-fit">Conocer más</Button>
                </div>
              </div>
            </div>

            {/* Proyectos Secundarios */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Project 1 */}
              <div className="rounded-xl border bg-white p-6 shadow-md flex flex-col">
                <Image
                  src="/AI_Image&Video.png?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Imágenes y Vídeos con IA"
                  className="aspect-[16/16] w-full overflow-hidden rounded-lg object-cover object-center"
                />
                <div className="mt-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Imágenes y Vídeos con IA</h3>
                    <p className="text-muted-foreground mt-2">
                      Utilizamos tecnología de vanguardia para crear imágenes y vídeos realistas con IA, generando contenido visual de alta calidad para marketing, entretenimiento y diseño.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-fit">
                      Ver ejemplos
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="rounded-xl border bg-white p-6 shadow-md flex flex-col">
                <Image
                  src="/AI_FUTBOL.png?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Visión Artificial en Fútbol"
                  className="aspect-[16/16] w-full overflow-hidden rounded-lg object-cover object-center"
                />
                <div className="mt-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Visión Artificial en Fútbol</h3>
                    <p className="text-muted-foreground mt-2">
                      Usamos herramientas de visión artificial para realizar el trackeo de los jugadores de fútbol, obtener estadísticas, mostrar los mejores momentos y mucho más.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-fit">
                      Ver ejemplos
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="rounded-xl border bg-white p-6 shadow-md flex flex-col">
                <Image
                  src="/AI_DeepFake.png?height=300&width=500"
                  width={500}
                  height={300}
                  alt="DeepFake Technology"
                  className="aspect-[16/16] w-full overflow-hidden rounded-lg object-cover object-center"
                />
                <div className="mt-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold">DeepFakes Avanzados</h3>
                    <p className="text-muted-foreground mt-2">
                      Desarrollamos tecnología DeepFake con recursos de alta tecnología para aplicaciones éticas en entretenimiento, doblaje automático y creación de contenido personalizado.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-fit">
                      Ver ejemplos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Methodology Section */}
        <section id="methodology" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nuestra Metodología</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Un proceso estructurado para garantizar el éxito de cada proyecto
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  1
                </div>
                <h3 className="pt-4 text-xl font-bold">Consulta Inicial</h3>
                <p className="text-center text-muted-foreground">
                  Analizamos tus necesidades y objetivos para definir el alcance del proyecto y la solución más
                  adecuada.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
                  <li>• Análisis de requerimientos</li>
                  <li>• Definición de objetivos</li>
                  <li>• Evaluación de viabilidad</li>
                  <li>• Propuesta personalizada</li>
                </ul>
              </div>

              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  2
                </div>
                <h3 className="pt-4 text-xl font-bold">Desarrollo Personalizado</h3>
                <p className="text-center text-muted-foreground">
                  Diseñamos y desarrollamos la solución utilizando las tecnologías más adecuadas para tu caso
                  específico.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
                  <li>• Diseño de arquitectura</li>
                  <li>• Desarrollo iterativo</li>
                  <li>• Pruebas continuas</li>
                  <li>• Revisiones periódicas</li>
                </ul>
              </div>

              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  3
                </div>
                <h3 className="pt-4 text-xl font-bold">Implementación Final</h3>
                <p className="text-center text-muted-foreground">
                  Desplegamos la solución en tu entorno, proporcionamos capacitación y aseguramos una transición sin
                  problemas.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
                  <li>• Despliegue en producción</li>
                  <li>• Capacitación de usuarios</li>
                  <li>• Documentación completa</li>
                  <li>• Soporte post-implementación</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-white to-green-50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hablemos de tu Proyecto</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Estamos listos para ayudarte a transformar tus ideas en soluciones de IA innovadoras. Contáctanos
                    para comenzar.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>info@naia.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>+34 912 345 678</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-md">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Asunto
                    </label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Cuéntanos sobre tu proyecto" className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensaje</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="group flex items-center space-x-2">
            <div className="rounded-full border border-black p-2">
              <Image
                src="/NA.IA_ICON NEGRO.png"
                alt="Logo NA.IA"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="inline-block font-bold text-black">
              NA.IA
            </span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} NA.IA. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Términos
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

